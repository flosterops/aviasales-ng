import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModel, TransfersDictionaryModel } from '../../models/cardModel';
import { TicketFiltersService } from '../../services/ticket-filter-service/ticket-filters.service';

@Component({
    selector: 'app-ticket-card',
    templateUrl: './ticket-card.component.html',
    styleUrls: ['./ticket-card.component.scss'],
})
export class TicketCardComponent implements OnInit {
    public transfersDictionary: TransfersDictionaryModel;
    @Input() card: CardModel;
    @Output() buyTicket = new EventEmitter<string>();

    constructor(private ticketFiltersService: TicketFiltersService) {
        this.transfersDictionary = this.ticketFiltersService.transfersDictionary;
    }

    ngOnInit(): void {}

    onBuyTicket(id: string) {
        this.buyTicket.emit(id);
    }
}
