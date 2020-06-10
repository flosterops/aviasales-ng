import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { TicketCardComponent } from './ticket-card/ticket-card.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [CheckboxComponent, TicketCardComponent],
    exports: [CheckboxComponent, TicketCardComponent],
})
export class SharedModule {}
