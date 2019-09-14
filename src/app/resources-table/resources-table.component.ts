import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IState } from '../models/IState.model';
import { IResource } from '../models/IResource.model';

@Component({
  selector: 'resources-table',
  templateUrl: './resources-table.component.html',
  styleUrls: ['./resources-table.component.scss']
})

export class ResourcesTable {
    @Input() states: Array<IState> = [];
    @Input() resources: Array<IResource> = [];

    @Output() onchecked: EventEmitter<IState> = new EventEmitter();
    @Output() onexpanded: EventEmitter<IState> = new EventEmitter();

    pageNumber: number = 1;
    itemsPerPage: number = 10;
    
    getIndexByPageNumber(index: number): number {   
        return this.pageNumber == 1 ? index : (this.itemsPerPage * (this.pageNumber - 1)) + index;
    }

    handleChecked(state: IState): void {
        state.checked = !state.checked;

        this.onchecked.emit(state);
    }

    handleExpanded(state: IState): void {
        state.expanded = !state.expanded;

        this.onexpanded.emit(state);
    }


}