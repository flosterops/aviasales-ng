import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterCheckboxModel } from '../../models/checkboxModel';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
    @Input() checkbox: FilterCheckboxModel;
    @Output() onCheckboxChange: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    emitCheckboxChange(id: string, isChecked: boolean, filterValue: number): void {
        this.onCheckboxChange.emit({ id, isChecked: !isChecked, filterValue });
    }
}
