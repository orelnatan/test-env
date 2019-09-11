import { Component, Input, OnInit } from '@angular/core';
import { IState } from '../models/IState.model';
import { IResource } from '../models/IResource.model';

@Component({
  selector: 'resources-table',
  templateUrl: './resources-table.component.html',
  styleUrls: ['./resources-table.component.scss']
})

export class ResourcesTable implements OnInit {
    @Input() states: Array<IState> = [];
    @Input() resources: Array<IResource> = [];

    ngOnInit(): void {
        console.log(this.resources);
        console.log(this.states);
    }
    
}