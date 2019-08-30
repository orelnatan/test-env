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
        if(!teeth.length) {
            this.selectedSmears = [];
        }
    }

    onSmearChange(smears: Array<number>): void {
        if(!this.selectedTeeth.length){
            this.selectedSmears = [];
            console.log('Error: bla bla bla...')
        }
    }

}
