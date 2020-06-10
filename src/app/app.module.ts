import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './shared/tabs/tabs.component';
import { TicketFiltersService } from './services/ticket-filter-service/ticket-filters.service';
import { MainModule } from './modules/main/main.module';
import { BucketModule } from './modules/bucket/bucket.module';

@NgModule({
    declarations: [AppComponent, TabsComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, MainModule, BucketModule],
    providers: [TicketFiltersService],
    bootstrap: [AppComponent],
})
export class AppModule {}
