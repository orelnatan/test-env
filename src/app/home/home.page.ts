import { Component } from '@angular/core';
import { ITooth } from '../adult-jaw/components/tooth/tooth.component';
import { ISmear } from '../adult-jaw/adult-jaw.component';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class Home {
    
    

    onTeethToggle(tooth: ITooth): void {
        console.log(tooth);
    }

}
