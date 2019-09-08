import { Component, Input } from '@angular/core';
import { ICountry } from '../models/ICountry.model';

interface IContinent {
    label: string;
    countries: Array<string>;
}

@Component({
  selector: 'countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.scss']
})

export class CountriesTable {
    @Input() countries: Array<ICountry> = [];

    continents: Array<IContinent> = [
        {
            label: "Africa",
            countries: [
                "Algeria",
                "Botswana",
                "Liberia",
                "Tanzania",
            ]
        },
        {
            label: "Europe",
            countries: [
                "Russia",
                "France",
                "Spain",
            ]
        },
        {
            label: "Asia",
            countries: [
                "China",
                "Israel",
                "Syria",
                "South Korea",
                "Philippines",
            ]
        },
        {
            label: "South America",
            countries: [
                "Suriname",
                "Guyana",
                "Peru",
                "Brazil",
            ]
        },
        {
            label: "Australia",
            countries: [
                "Papua New Guinea",
                "New Zealand",
                "Fiji",
                "Tuvalu",
                "Tonga",
                "Solomon Islands",
            ]
        },
    ];

    properties: Array<string> = [
        "Driving side",
        "Population",
        "Currency",
        "Language",
        "President",
        "Time zone",
    ];

    objectKeys: Function = Object.keys;

    getAllCountries(): Array<string> {
       let allCountries: Array<string> = [];

       this.continents.map((continent: IContinent) => {
           continent.countries.forEach(
               (country: string) => { 
                    allCountries.push(country);
           });
       });

        return allCountries;
    }
}