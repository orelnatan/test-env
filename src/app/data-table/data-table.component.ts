import { Component } from '@angular/core';
import { IColHeader } from './components/col-header/col-header.component';
import { IRowHeader } from './components/row-header/row-header.component';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTable {
    colheaders: Array<IColHeader> = [
        {
            label: "Africa",
            id: 5423,
            subheaders: [
                {
                    label: "Algeria",
                    id: 333,
                },
                {
                    label: "Botswana",
                    id: 112,
                },
                {
                    label: "Liberia",
                    id: 767,
                },
                {
                    label: "Tanzania",
                    id: 877,
                },
            ]
        },
        {
            label: "Europe",
            id: 1411,
            subheaders: [
                {
                    label: "Russia",
                    id: 988,
                },
                {
                    label: "France",
                    id: 990,
                },
                {
                    label: "Spain",
                    id: 210,
                },
            ]
        },
        {
            label: "Asia",
            id: 9865,
            subheaders: [
                {
                    label: "China",
                    id: 118,
                },
                {
                    label: "Israel",
                    id: 972,
                },
                {
                    label: "Syria",
                    id: 333,
                },
                {
                    label: "South Korea",
                    id: 987,
                },
                {
                    label: "Philippines",
                    id: 121,
                },
            ]
        },
        {
            label: "South America",
            id: 1000,
            subheaders: [
                {
                    label: "Suriname",
                    id: 335,
                },
                {
                    label: "Guyana",
                    id: 877,
                },
                {
                    label: "Peru",
                    id: 433,
                },
                {
                    label: "Brazil",
                    id: 900,
                },
            ]
        },
        {
            label: "Australia",
            id: 1256,
            subheaders: [
                {
                    label: "Papua New Guinea",
                    id: 719,
                },
                {
                    label: "New Zealand",
                    id: 496,
                },
                {
                    label: "Fiji",
                    id: 984,
                },
                {
                    label: "Tuvalu",
                    id: 222,
                },
                {
                    label: "Tonga",
                    id: 777,
                },
                {
                    label: "Solomon Islands",
                    id: 666,
                },
            ]
        },
    ];
    rowheaders: Array<IRowHeader> = [
        {
            label: "Driving side",
            id: 65
        },
        {
            label: "Population",
            id: 86
        },
        {
            label: "Currency",
            id: 66
        },
        {
            label: "language",
            id: 87
        },
        {
            label: "President",
            id: 11
        },
        {
            label: "Time zone",
            id: 60
        }
    ]
    
    data = [
        {
            
        }
    ];

    
}
