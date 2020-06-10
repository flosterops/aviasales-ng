import { Component, OnInit } from '@angular/core';
import { CardModel } from '../../models/cardModel';
import { TicketsServiceService } from '../../services/tickets-service/tickets-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-tickets-panel',
    templateUrl: './tickets-panel.component.html',
    styleUrls: ['./tickets-panel.component.scss'],
})
export class TicketsPanelComponent implements OnInit {
    public cards: Array<CardModel & { visible: boolean }>;

    constructor(private ticketsService: TicketsServiceService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.ticketsService.tickets.subscribe((res: Array<CardModel & { visible: boolean }>) => {
            this.cards = res;
        });
    }

    onBuyTicket(id: string): void {
        this.ticketsService.addToBucket(id);
    }

    navigateToTicket(id: string): void {
        this.router.navigate([`/ticket/${id}`]);
    }
}
