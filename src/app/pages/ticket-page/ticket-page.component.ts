import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketsServiceService } from '../../services/tickets-service/tickets-service.service';
import { CardModel } from '../../models/cardModel';

@Component({
    selector: 'app-ticket-page',
    templateUrl: './ticket-page.component.html',
    styleUrls: ['./ticket-page.component.scss'],
})
export class TicketPageComponent implements OnInit {
    public ticket: CardModel;

    constructor(private ticketsService: TicketsServiceService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.ticketsService.findTicketById(params.id);
        });
        this.ticketsService.ticket.subscribe((foundedTicket: CardModel) => {
            this.ticket = foundedTicket;
        });
    }
}
