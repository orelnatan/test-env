import { Component, Input } from '@angular/core';
import { IResource } from 'src/app/models/IResource.model';

@Component({
  selector: 'resource-accordion',
  templateUrl: './resource-accordion.component.html',
  styleUrls: ['./resource-accordion.component.scss']
})

export class ResourceAccordion {
   @Input() resource: IResource = {} as IResource;
   @Input() dataIndex: number;
   @Input() expanded: boolean;

}