import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../../pages/main/main.component';
import { TicketFiltersService } from '../../services/ticket-filter-service/ticket-filters.service';
import { PriceFilterServiceService } from '../../services/price-filter-service/price-filter-service.service';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule {}
