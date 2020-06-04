import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterCheckboxModel } from '../../models/checkboxModel';
import { TransfersDictionaryModel } from '../../models/cardModel';

@Injectable({
    providedIn: 'root',
})
export class TicketFiltersService {
    constructor() {
        this.checkboxFiltersConfig.value.forEach((checkbox) => this.filterValues.add(checkbox.filterValue));
    }

    private allTicketsFilterValue = 99;
    private filterValues = new Set<number>();

    public checkboxFiltersConfig = new BehaviorSubject<Array<FilterCheckboxModel>>([
        {
            id: 'all-tickets',
            label: 'Все',
            filterValue: 99,
            isChecked: true,
        },
        {
            id: 'one-transfer',
            label: 'Одна пересадка',
            filterValue: 1,
            isChecked: true,
        },
        {
            id: 'two-transfers',
            label: 'Две пересадки',
            filterValue: 2,
            isChecked: true,
        },
        {
            id: 'three-transfers',
            label: 'Три пересадки',
            filterValue: 3,
            isChecked: true,
        },
        {
            id: 'zero-transfers',
            label: 'Без пересадок',
            filterValue: 0,
            isChecked: true,
        },
    ]);

    public transfersDictionary: TransfersDictionaryModel = {
        0: 'Без пересадок',
        1: 'Одна пересадка',
        2: 'Две пересадки',
        3: 'Три пересадки',
    };

    public filterChanged(id: string, isChecked: boolean, filterValue: number): Set<number> {
        if (filterValue === this.allTicketsFilterValue) {
            this.getFiltersByAllCheckbox(isChecked);
            return this.filterValues;
        }
        this.getFiltersForSingleCheckbox(isChecked, filterValue);
        return this.filterValues;
    }

    private getFiltersByAllCheckbox(value: boolean): void {
        const newCheckboxState = this.checkboxFiltersConfig.value.map((item) => ({ ...item, isChecked: value }));
        if (value) {
            this.checkboxFiltersConfig.value.forEach((checkbox) => this.filterValues.add(checkbox.filterValue));
        } else {
            this.filterValues = new Set<number>();
        }
        this.applyFilters(newCheckboxState);
    }

    private changeFilterValuesByChecked(checked: boolean, filterValue: number) {
        if (!checked) {
            this.filterValues.delete(filterValue);
        } else {
            this.filterValues.add(filterValue);
        }
    }

    private getFiltersForSingleCheckbox(value: boolean, filterValue: number): void {
        this.changeFilterValuesByChecked(value, filterValue);
        const updatedCheckboxConfig = this.getUpdatedCheckboxConfig(value, filterValue);
        return this.applyFilters(updatedCheckboxConfig);
    }

    private getUpdatedCheckboxConfig(value: boolean, filterValue: number): Array<FilterCheckboxModel> {
        const uncheckAllTicketsCheckbox = this.filterValues.size === 1 && this.filterValues.has(this.allTicketsFilterValue);
        const checkAllTicketsCheckbox = this.filterValues.size === 4 && !this.filterValues.has(this.allTicketsFilterValue);
        if (uncheckAllTicketsCheckbox) {
            this.filterValues = new Set();
        }
        if (checkAllTicketsCheckbox) {
            this.filterValues.add(this.allTicketsFilterValue);
        }
        return this.checkboxFiltersConfig.value.map((checkbox) => {
            if (filterValue === checkbox.filterValue) {
                return { ...checkbox, isChecked: value };
            }
            if (checkbox.filterValue === this.allTicketsFilterValue && (uncheckAllTicketsCheckbox || checkAllTicketsCheckbox)) {
                return { ...checkbox, isChecked: value };
            }
            return checkbox;
        });
    }

    private applyFilters(checkboxConfig: Array<FilterCheckboxModel>): void {
        this.checkboxFiltersConfig.next(checkboxConfig);
    }
}
