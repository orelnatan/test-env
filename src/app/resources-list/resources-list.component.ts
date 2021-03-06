import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IResource } from '../models/IResource.model';

@Component({
  selector: 'resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})

export class ResourcesList {
    @Input() resources: Array<IResource> = [];
    @Input() selectedResources: Array<IResource> = [];

    @Output() onchange: EventEmitter<IResource[]> = new EventEmitter();

    isResourceExists(resourceId: string): boolean {
        return this.selectedResources.map((resource) => resource.id).indexOf(
            resourceId
        ) != -1;
    }

    selectResource(resource: IResource): void {
        this.selectedResources.unshift(
            resource
        );
    }

    unSelectResource(resource: IResource): void {
        if(this.selectedResources.length == 1) return;
        
        this.selectedResources.splice(
            this.selectedResources.indexOf(resource),
            1
        );
    }
}