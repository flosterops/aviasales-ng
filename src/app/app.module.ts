import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './shared/tabs/tabs.component';
import { TicketFiltersService } from './services/ticket-filter-service/ticket-filters.service';

@NgModule({
    declarations: [AppComponent, TabsComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [TicketFiltersService],
    bootstrap: [AppComponent],
})
export class AppModule {}
