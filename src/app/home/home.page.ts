import { Component } from '@angular/core';
import { IJaw } from '../models/IJaw.model';
import { IDocument } from '../models/IDocument.model';
import { ICountry } from '../models/ICountry.model';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class Home {
    countries: Array<ICountry> = [
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
        {
            drivingSide: 'right',
            population: 4800700,
            currency: 'USD',
            language: 'EN',
            president: 'Barak Obama',
            timeZone: 'UTC +3'
        },
    ];

    documents: Array<IDocument> = [
        {id: 55211, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 43224, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 78297, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 33233, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 42223, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 97287, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 78278, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 77288, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 74265, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 12243, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 54234, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 87232, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 32222, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 62666, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 98278, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 12111, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 15269, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 73281, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 87120, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 80200, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 52554, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 32455, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
        {id: 21222, environment: "Creativity", type: 'order', vendor: 'Sony', date: '04/11/17', number: 'PD3424234', price: '4,325 PDS'},
    ];
    
    
    jaw: IJaw = {
        selectedTeeth: [11, 12, 13, 14, 15, 16,17, 18],
        selectedSmears: [212, 876]
    }
    
    handleChange(jaw: IJaw): void {
        console.log(jaw);
    }

    showAlert(jawAlert: string): void {
        console.log(jawAlert);
    }

}
