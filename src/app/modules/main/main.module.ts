import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FilterPanelComponent } from '../../components/filter-panel/filter-panel.component';
import { MainComponent } from '../../pages/main/main.component';
import { TicketsPanelComponent } from '../../components/tickets-panel/tickets-panel.component';
import { TicketFiltersService } from '../../services/ticket-filter-service/ticket-filters.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [FilterPanelComponent, MainComponent, TicketsPanelComponent],
    imports: [CommonModule, MainRoutingModule, SharedModule],
    exports: [MainComponent],
    providers: [TicketFiltersService],
})
export class MainModule {}
