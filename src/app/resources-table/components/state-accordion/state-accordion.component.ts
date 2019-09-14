import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { IState } from 'src/app/models/IState.model';

@Component({
  selector: 'state-accordion',
  templateUrl: './state-accordion.component.html',
  styleUrls: ['./state-accordion.component.scss']
})

export class StateAccordion implements OnChanges {
    @Input() state: IState = {} as IState;
    @Input() rowIndex: number;
    @Input() expanded: boolean;
    @Input() checked: boolean;

    @Output() onchecked: EventEmitter<IState> = new EventEmitter();
    @Output() onexpanded: EventEmitter<IState> = new EventEmitter();

    expand: boolean;
    minimize: boolean;

    ngOnChanges(): void {
        if(this.expanded) {
            this.expandTbody();
            
        } else if(!this.expanded && this.expand) {
            this.minimizeTbody();
        }
    }

    private minimizeTbody(): void {
        this.expand = false;
        this.minimize = true;
    }

    private expandTbody(): void {
        this.minimize = false;
        this.expand = true;
    }
}