import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IState } from '../models/IState.model';
import { IResource } from '../models/IResource.model';
import { StateAccordion } from './components/state-accordion/state-accordion.component';

@Component({
  selector: 'resources-table',
  templateUrl: './resources-table.component.html',
  styleUrls: ['./resources-table.component.scss']
})

export class ResourcesTable {
    @Input() states: Array<IState> = [];
    @Input() resources: Array<IResource> = [];

    @Output() checked: EventEmitter<IState> = new EventEmitter();
    @Output() expanded: EventEmitter<IState> = new EventEmitter();

    pageNumber: number = 1;
    itemsPerPage: number = 5;
    
    getIndexByPageNumber(index: number): number {   
        return this.pageNumber == 1 ? index : (this.itemsPerPage * (this.pageNumber - 1)) + index;
    }

    handleChecked(state: IState): void {
        state.checked = !state.checked;

        this.checked.emit(state);
    }

    handleExpanded(state: IState, stateAccRef: StateAccordion): void {
        state.expanded ? stateAccRef.minimizeTbody() : stateAccRef.expandTbody();

        state.expanded = !state.expanded;
        this.expanded.emit(state);
    }


}