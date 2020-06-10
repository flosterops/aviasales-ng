import { Component, OnInit } from '@angular/core';
import { TicketsServiceService } from '../../services/tickets-service/tickets-service.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    public bucketCount = 0;
    constructor(private ticketsService: TicketsServiceService) {}

    ngOnInit(): void {
        this.ticketsService.tickets.subscribe((tickets) => {
            const bucketTickets = tickets.filter((ticket) => ticket.bucket);
            this.bucketCount = bucketTickets.length;
        });
    }
}
