import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'range-button',
  templateUrl: './range-button.component.html',
  styleUrls: ['./range-button.component.scss']
})

export class RangeButton {
    @Input() disabled: boolean;
    @Input() label: string;
    @Input() pressed: boolean;

    @Output() onClick: EventEmitter<void> = new EventEmitter();
}
