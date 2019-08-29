import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'smear-button',
  templateUrl: './smear-button.component.html',
  styleUrls: ['./smear-button.component.scss']
})

export class SmearButton {
    @Input() disabled: boolean;
    @Input() label: string;
    @Input() selected: boolean;
    @Input() id: number;

    @Output() onClick: EventEmitter<number> = new EventEmitter();
}
