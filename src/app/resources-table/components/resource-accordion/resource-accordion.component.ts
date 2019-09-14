import { Component, Input, OnChanges } from '@angular/core';
import { IResource } from 'src/app/models/IResource.model';

@Component({
  selector: 'resource-accordion',
  templateUrl: './resource-accordion.component.html',
  styleUrls: ['./resource-accordion.component.scss']
})

export class ResourceAccordion implements OnChanges {
   @Input() resource: IResource = {} as IResource;
   @Input() dataIndex: number;
   @Input() expanded: boolean;

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