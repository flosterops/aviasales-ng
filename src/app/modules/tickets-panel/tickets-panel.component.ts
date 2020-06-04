import {Component, OnInit} from '@angular/core';
import {CardModel} from '../../models/cardModel';
import {TicketFiltersService} from '../../services/ticket-filter-service/ticket-filters.service';

@Component({
  selector: 'app-tickets-panel',
  templateUrl: './tickets-panel.component.html',
  styleUrls: ['./tickets-panel.component.scss']
})
export class TicketsPanelComponent implements OnInit {
  public cards: Array<CardModel>;

  constructor(private ticketFiltersService: TicketFiltersService) {
  }

  ngOnInit(): void {
     this.ticketFiltersService.filteredTickets.subscribe((res: Array<CardModel>) => {
       this.cards = res;
    });
  }

}
