import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TicketsServiceService } from '../../services/tickets-service/tickets-service.service';
import { CardModel } from '../../models/cardModel';

@Component({
    selector: 'app-bucket-mini',
    templateUrl: './bucket-mini.component.html',
    styleUrls: ['./bucket-mini.component.scss'],
})
export class BucketMiniComponent implements OnInit {
    constructor(private ticketsService: TicketsServiceService) {}
    public isOpenModel = false;
    public bucketTickets: Array<CardModel>;
    public isEmpty = true;
    @ViewChild('bucketEmpty') bucketEmpty: TemplateRef<any>;

    ngOnInit(): void {
        this.ticketsService.tickets.subscribe((res: Array<CardModel>) => {
            this.bucketTickets = res;
            this.isEmpty = this.bucketTickets.some((ticket) => !ticket.bucket);
        });
    }

    removeTicketFromBucket(id: string): void {
        this.ticketsService.removeFromBucket(id);
    }

    toggleBucketModal(): void {
        this.isOpenModel = !this.isOpenModel;
    }
}
