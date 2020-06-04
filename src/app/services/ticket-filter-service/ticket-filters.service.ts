import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterCheckboxModel} from '../../models/checkboxModel';
import {CardModel, TransfersDictionaryModel} from '../../models/cardModel';

@Injectable({
  providedIn: 'root'
})
export class TicketFiltersService {

  constructor() {
    this.checkboxFiltersConfig.value.forEach(checkbox => this.filterValues.add(checkbox.filterValue));
  }

  private tickets: Array<CardModel> = [
    {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '16:20',
    arrival_date: '12.05.18',
    arrival_time: '22:10',
    carrier: 'TK',
    stops: 3,
    price: 12400
  }, {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '17:20',
    arrival_date: '12.05.18',
    arrival_time: '23:50',
    carrier: 'S7',
    stops: 1,
    price: 13100
  }, {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '12:10',
    arrival_date: '12.05.18',
    arrival_time: '18:10',
    carrier: 'SU',
    stops: 0,
    price: 15300
  }, {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '17:00',
    arrival_date: '12.05.18',
    arrival_time: '23:30',
    carrier: 'TK',
    stops: 2,
    price: 11000
  }, {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '12:10',
    arrival_date: '12.05.18',
    arrival_time: '20:15',
    carrier: 'BA',
    stops: 3,
    price: 13400
  }, {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '9:40',
    arrival_date: '12.05.18',
    arrival_time: '19:25',
    carrier: 'SU',
    stops: 3,
    price: 12450
  }, {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '17:10',
    arrival_date: '12.05.18',
    arrival_time: '23:45',
    carrier: 'TK',
    stops: 1,
    price: 13600
  }, {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '6:10',
    arrival_date: '12.05.18',
    arrival_time: '15:25',
    carrier: 'TK',
    stops: 0,
    price: 14250
  }, {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '16:50',
    arrival_date: '12.05.18',
    arrival_time: '23:35',
    carrier: 'SU',
    stops: 1,
    price: 16700
  }, {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '6:10',
    arrival_date: '12.05.18',
    arrival_time: '16:15',
    carrier: 'S7',
    stops: 0,
    price: 17400
  }
  ];
  private allTicketsFilterValue = 99;
  private filterValues = new Set();

  public checkboxFiltersConfig  = new BehaviorSubject<Array<FilterCheckboxModel>> ([
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
    }
  ]);

  public transfersDictionary: TransfersDictionaryModel = {
    0: 'Без пересадок',
    1: 'Одна пересадка',
    2: 'Две пересадки',
    3: 'Три пересадки'
  };

  public filteredTickets = new BehaviorSubject(this.tickets);

  public filterChanged(id: string, isChecked: boolean, filterValue: number): void {
    if (filterValue === this.allTicketsFilterValue) {
      return this.getFiltersByAllCheckbox(isChecked);
    }
    this.getFiltersForSingleCheckbox(isChecked, filterValue);
  }

  private getFiltersByAllCheckbox(value: boolean): void {
    const newCheckboxState = this.checkboxFiltersConfig.value.map(item => ({ ...item, isChecked: value }));
    const tickets = value ? this.tickets : [];
    if (value) {
      this.checkboxFiltersConfig.value.forEach(checkbox => this.filterValues.add(checkbox.filterValue));
    } else {
      this.filterValues = new Set<number>();
    }
    this.applyFilters(newCheckboxState, tickets);
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
    const filteredTickets = this.tickets.filter(ticket => this.filterValues.has(ticket.stops));
    const updatedCheckboxConfig = this.getUpdatedCheckboxConfig(value, filterValue);
    return this.applyFilters(updatedCheckboxConfig, filteredTickets);
  }

  private getUpdatedCheckboxConfig(value: boolean, filterValue: number): Array<FilterCheckboxModel> {
    const uncheckAllTicketsCheckbox = this.filterValues.size  === 1 && this.filterValues.has(this.allTicketsFilterValue);
    const checkAllTicketsCheckbox = this.filterValues.size === 4 && !this.filterValues.has(this.allTicketsFilterValue);
    if (uncheckAllTicketsCheckbox) {
      this.filterValues = new Set();
    }
    if (checkAllTicketsCheckbox) {
      this.filterValues.add(this.allTicketsFilterValue);
    }
    return this.checkboxFiltersConfig.value.map(checkbox => {
      if (filterValue === checkbox.filterValue) {
        return { ...checkbox, isChecked: value };
      }
      if (checkbox.filterValue === this.allTicketsFilterValue && (uncheckAllTicketsCheckbox || checkAllTicketsCheckbox)) {
        return { ...checkbox, isChecked: value };
      }
      return checkbox;
    });
  }

  private applyFilters(checkboxConfig: Array<FilterCheckboxModel>, tickets: Array<CardModel>): void {
    this.checkboxFiltersConfig.next(checkboxConfig);
    this.filteredTickets.next(tickets);
  }
};
