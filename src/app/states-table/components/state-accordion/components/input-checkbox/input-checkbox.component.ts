import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})

export class InputCheckbox {
    @Input() label: string;
    @Input() disabled: boolean;
    @Input() checked: boolean;

    @Output() onchange: EventEmitter<boolean> = new EventEmitter();
}
