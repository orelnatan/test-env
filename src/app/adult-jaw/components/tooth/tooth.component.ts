import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tooth',
  templateUrl: './tooth.component.html',
  styleUrls: ['./tooth.component.scss']
})

export class Tooth {
    @Input() id: number;
    @Input() label: string;
    @Input() disabled: boolean;
    @Input() checked: boolean;

    @Output() onChange: EventEmitter<number> = new EventEmitter();
}
