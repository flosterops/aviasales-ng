import { Component, OnInit } from '@angular/core';
import { TicketsServiceService } from '../../services/tickets-service/tickets-service.service';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    public bucketCount = 0;
    public userLogin: string;
    constructor(private ticketsService: TicketsServiceService, private authService: AuthService) {}

    ngOnInit(): void {
        this.ticketsService.tickets.subscribe((tickets) => {
            const bucketTickets = tickets.filter((ticket) => ticket.bucket);
            this.bucketCount = bucketTickets.length;
        });

        this.authService.user.subscribe((user) => {
            if (user) {
                this.userLogin = user.login;
            }
        });
    }
}
