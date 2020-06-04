import {Component, Input, OnInit} from '@angular/core';
import {CardModel, TransfersDictionaryModel} from '../../models/cardModel';
import {TicketFiltersService} from '../../services/ticket-filter-service/ticket-filters.service';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent implements OnInit {
  @Input() card: CardModel;
  public transfersDictionary: TransfersDictionaryModel;

  constructor(private ticketFiltersService: TicketFiltersService) {
    this.transfersDictionary = this.ticketFiltersService.transfersDictionary;
  }

  ngOnInit(): void {
  }

}
