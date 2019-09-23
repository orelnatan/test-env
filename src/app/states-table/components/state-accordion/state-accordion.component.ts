import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { IState } from 'src/app/models/IState.model';

@Component({
  selector: 'state-accordion',
  templateUrl: './state-accordion.component.html',
  styleUrls: ['./state-accordion.component.scss']
})

export class StateAccordion {
    @Input() state: IState = {} as IState;
    @Input() rowIndex: number;
    @Input() expanded: boolean;
    @Input() checked: boolean;

    @Output() onchecked: EventEmitter<IState> = new EventEmitter();
    @Output() onexpanded: EventEmitter<IState> = new EventEmitter();
}