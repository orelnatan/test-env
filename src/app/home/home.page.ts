import { Component } from '@angular/core';
import { IJaw } from '../models/IJaw.model';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class Home {
    jaw: IJaw = {
        selectedTeeth: [11, 22, 41],
        selectedSmears: [212, 876]
    }
    
    handleChange(jaw: IJaw): void {
        console.log(jaw);
    }

    showAlert(jawAlert: string): void {
        console.log(jawAlert);
    }

}
