import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'smear-button',
  templateUrl: './smear-button.component.html',
  styleUrls: ['./smear-button.component.scss']
})

export class SmearButton {
    @Input() id: number;
    @Input() label: string;
    @Input() disabled: boolean;
    @Input() selected: boolean;
    
    @Output() onClick: EventEmitter<number> = new EventEmitter();
}
