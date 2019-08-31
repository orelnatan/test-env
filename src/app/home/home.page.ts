import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class Home {
    selectedTeeth = [];
    selectedSmears = [];
    
    onTeethChange(teeth: Array<number>): void {
        console.log(teeth);
    }

    onSmearChange(smears: Array<number>): void {
        console.log(smears);
    }

    showAlert(jawAlert: string): void {
        console.log(jawAlert);
    }

}
