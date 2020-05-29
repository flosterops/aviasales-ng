import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() value = false;
  @Input() label = '';
  @Output() onChange: EventEmitter<any>;

  constructor() {

  }

  ngOnInit(): void {
  }

}
