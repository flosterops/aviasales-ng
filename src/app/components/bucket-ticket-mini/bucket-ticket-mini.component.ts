import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModel } from '../../models/cardModel';

@Component({
    selector: 'app-bucket-ticket-mini',
    templateUrl: './bucket-ticket-mini.component.html',
    styleUrls: ['./bucket-ticket-mini.component.scss'],
})
export class BucketTicketMiniComponent implements OnInit {
    @Input() ticket: CardModel;
    @Output() remove: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}

    onRemoveClick(id: string): void {
        this.remove.emit(id);
    }
}
