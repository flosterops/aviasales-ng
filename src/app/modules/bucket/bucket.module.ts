import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BucketRoutingModule } from './bucket-routing.module';
import { BucketComponent } from '../../pages/bucket/bucket.component';
import { SharedModule } from '../../shared/shared.module';
import { TicketFiltersService } from '../../services/ticket-filter-service/ticket-filters.service';

@NgModule({
    declarations: [BucketComponent],
    exports: [BucketComponent],
    imports: [CommonModule, BucketRoutingModule, SharedModule],
    providers: [TicketFiltersService],
})
export class BucketModule {}
