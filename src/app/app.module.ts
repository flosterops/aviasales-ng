import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './shared/tabs/tabs.component';
import { TicketFiltersService } from './services/ticket-filter-service/ticket-filters.service';
import { FiterRowComponent } from './modules/fiter-row/fiter-row.component';
import { TicketCardComponent } from './modules/ticket-card/ticket-card.component';
import { TicketsPanelComponent } from './modules/tickets-panel/tickets-panel.component';
import { FilterPanelComponent } from './modules/filter-panel/filter-panel.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        TabsComponent,
        FiterRowComponent,
        TicketCardComponent,
        TicketsPanelComponent,
        FilterPanelComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, SharedModule],
    providers: [TicketFiltersService],
    bootstrap: [AppComponent],
})
export class AppModule {}
