import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ITooth {
    id: number,
    label: string,
    disabled: boolean,
    checked: boolean
}

@Component({
  selector: 'tooth',
  templateUrl: './tooth.component.html',
  styleUrls: ['./tooth.component.scss']
})

export class Tooth {
    @Input() tooth: ITooth;

    @Output() onChange: EventEmitter<ITooth> = new EventEmitter();
}
