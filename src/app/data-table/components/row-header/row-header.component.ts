import { Component, Input } from '@angular/core';

export interface IRowHeader {
    label: string;
    id: number;
}

@Component({
  selector: 'row-header',
  templateUrl: './row-header.component.html',
  styleUrls: ['./row-header.component.scss']
})

export class RowHeader {
    @Input() rowheader;
}
