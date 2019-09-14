import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IState } from 'src/app/models/IState.model';

@Component({
  selector: 'state-accordion',
  templateUrl: './state-accordion.component.html',
  styleUrls: ['./state-accordion.component.scss']
})

export class StateAccordion {
    @Input() state: IState = {} as IState;
    @Input() rowIndex: number;

    @Output() checked: EventEmitter<IState> = new EventEmitter();
    @Output() expanded: EventEmitter<IState> = new EventEmitter();

    expand: boolean;
    minimize: boolean;

    public minimizeTbody(): void {
        this.expand = false;
        this.minimize = true;
    }

    public expandTbody(): void {
        this.minimize = false;
        this.expand = true;
    }
}