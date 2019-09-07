import { Component, Input } from '@angular/core';

export interface IColHeader {
    label: string;
    id: number;
    subheaders: Array<ISubHeader>;
}

export interface ISubHeader {
    label: string;
    id: number
}

@Component({
  selector: 'col-header',
  templateUrl: './col-header.component.html',
  styleUrls: ['./col-header.component.scss']
})

export class ColHeader {
    @Input() colheader;
}
