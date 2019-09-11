import { Component, Input } from '@angular/core';
import { IState } from 'src/app/models/IState.model';
import { IResource } from 'src/app/models/IResource.model';

@Component({
  selector: 'resource-accordion',
  templateUrl: './resource-accordion.component.html',
  styleUrls: ['./resource-accordion.component.scss']
})

export class ResourceAccordion {
    @Input() resource: IResource = {} as IResource;

}