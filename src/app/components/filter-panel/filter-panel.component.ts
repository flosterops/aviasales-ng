import { Component, OnInit } from '@angular/core';
import { TicketFiltersService } from '../../services/ticket-filter-service/ticket-filters.service';
import { TicketFilterModel } from '../../models/ticketFilterModel';
import { CheckboxModel, FilterCheckboxModel } from '../../models/checkboxModel';
import { TicketsServiceService } from '../../services/tickets-service/tickets-service.service';

@Component({
    selector: 'app-filter-panel',
    templateUrl: './filter-panel.component.html',
    styleUrls: ['./filter-panel.component.scss'],
})
export class FilterPanelComponent implements OnInit {
    public checkboxes: FilterCheckboxModel[];

    constructor(private ticketFiltersService: TicketFiltersService, private ticketsService: TicketsServiceService) {}

    ngOnInit(): void {
        this.ticketFiltersService.checkboxFiltersConfig.subscribe((res: Array<FilterCheckboxModel>) => {
            this.checkboxes = res;
        });
    }

    onFilterChange(event: { id: string; isChecked: boolean; filterValue: number }) {
        const filterValues = this.ticketFiltersService.filterChanged(event.id, event.isChecked, event.filterValue);
        this.ticketsService.applyFilters(filterValues);
    }
}
