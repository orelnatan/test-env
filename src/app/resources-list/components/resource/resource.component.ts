import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IResource } from '../../../models/IResource.model';

@Component({
  selector: 'resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})

export class Resource {
    @Input() resource: IResource = {} as IResource;
    @Input() selected: boolean;
    
    @Output() onclick: EventEmitter<IResource> = new EventEmitter();
}