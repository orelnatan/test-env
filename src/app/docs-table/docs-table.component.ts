import { Component, Input } from '@angular/core';
import { IDocument } from '../models/IDocument.model';

@Component({
  selector: 'docs-table',
  templateUrl: './docs-table.component.html',
  styleUrls: ['./docs-table.component.scss']
})

export class DocsTable {
    @Input() docs: Array<IDocument> = [];
    
    properties: Array<string> = [
        'Doc ID',
        'Environment', 
        'Document Type', 
        'Vendor', 
        'Invoice Date', 
        'Invoice Number', 
        'Total Price'
    ];

}