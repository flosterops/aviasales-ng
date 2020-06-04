import {Component, OnInit} from '@angular/core';
import {CardModel} from '../../models/cardModel';
import {TicketFiltersService} from '../../services/ticket-filter-service/ticket-filters.service';
import { TicketsServiceService } from '../../services/tickets-service/tickets-service.service';

@Component({
  selector: 'app-tickets-panel',
  templateUrl: './tickets-panel.component.html',
  styleUrls: ['./tickets-panel.component.scss']
})
export class TicketsPanelComponent implements OnInit {
  public cards: Array<CardModel & { visible: boolean}>;

  constructor(private ticketsService: TicketsServiceService) {
  }

  ngOnInit(): void {
     this.ticketsService.tickets.subscribe((res: Array<CardModel & { visible: boolean}>) => {
       this.cards = res;
    });
  }

}
