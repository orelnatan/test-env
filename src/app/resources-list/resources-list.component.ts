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

    @Output() onChange: EventEmitter<IResource[]> = new EventEmitter();

    isResourceExists(resourceId: string): boolean {
        return this.selectedResources.map((resource) => resource.id).indexOf(
            resourceId
        ) != -1;
    }

    selectResource(resource: IResource): void {
        this.selectedResources.push(
            resource
        );
    }

    unSelectResource(resource: IResource): void {
        this.selectedResources.splice(
            this.selectedResources.indexOf(resource),
            1
        );
    }
}