import { Component, OnInit } from '@angular/core';
import { CardModel } from '../../models/cardModel';
import { TicketsServiceService } from '../../services/tickets-service/tickets-service.service';

@Component({
    selector: 'app-bucket',
    templateUrl: './bucket.component.html',
    styleUrls: ['./bucket.component.scss'],
})
export class BucketComponent implements OnInit {
    public bucketTickets: Array<CardModel>;

    constructor(private ticketsService: TicketsServiceService) {}

    ngOnInit(): void {
        this.ticketsService.tickets.subscribe((tickets: Array<CardModel>) => {
            this.bucketTickets = tickets.filter((ticket) => ticket.bucket);
        });
    }
}
