import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITooth } from './components/tooth/tooth.component';

interface IRange {
    label: string;
    range: Array<number>
}

export interface ISmear {
    label: string;
    id: number,
}

@Component({
  selector: 'adult-jaw',
  templateUrl: './adult-jaw.component.html',
  styleUrls: ['./adult-jaw.component.scss']
})

export class AdultJaw {
    @Input() teeth: Array<ITooth> = [
        {
            id: 18,
            label: "18",
            checked: false,
            disabled: false
        },
        {
            id: 17,
            label: "17",
            checked: false,
            disabled: false,
        },
        {
            id: 16,
            label: "16",
            checked: false,
            disabled: false,
        },
        {
            id: 15,
            label: "15",
            checked: false,
            disabled: false,
        },
        {
            id: 14,
            label: "14",
            checked: false,
            disabled: false,
        },
        {
            id: 13,
            label: "13",
            checked: false,
            disabled: false,
        },
        {
            id: 12,
            label: "12",
            checked: false,
            disabled: false,
        },
        {
            id: 11,
            label: "11",
            checked: false,
            disabled: false,
        },
        {
            id: 21,
            label: "21",
            checked: false,
            disabled: false,
        },
        {
            id: 22,
            label: "22",
            checked: false,
            disabled: false,
        },
        {
            id: 23,
            label: "23",
            checked: false,
            disabled: false,
        },
        {
            id: 24,
            label: "24",
            checked: false,
            disabled: false,
        },
        {
            id: 25,
            label: "25",
            checked: false,
            disabled: false,
        },
        {
            id: 26,
            label: "26",
            checked: false,
            disabled: false,
        },
        {
            id: 27,
            label: "27",
            checked: false,
            disabled: false,
        },
        {
            id: 28,
            label: "28",
            checked: false,
            disabled: false,
        },
        {
            id: 38,
            label: "38",
            checked: false,
            disabled: false,
        },
        {
            id: 37,
            label: "37",
            checked: false,
            disabled: false,
        },
        {
            id: 36,
            label: "36",
            checked: false,
            disabled: false,
        },
        {
            id: 35,
            label: "35",
            checked: false,
            disabled: false,
        },
        {
            id: 34,
            label: "34",
            checked: false,
            disabled: false,
        },
        {
            id: 33,
            label: "33",
            checked: false,
            disabled: false,
        },
        {
            id: 32,
            label: "32",
            checked: false,
            disabled: false,
        },
        {
            id: 31,
            label: "31",
            checked: false,
            disabled: false,
        },
        {
            id: 41,
            label: "41",
            checked: false,
            disabled: false,
        },
        {
            id: 42,
            label: "42",
            checked: false,
            disabled: false,
        },
        {
            id: 43,
            label: "43",
            checked: false,
            disabled: false,
        },
        {
            id: 44,
            label: "44",
            checked: false,
            disabled: false,
        },
        {
            id: 45,
            label: "45",
            checked: false,
            disabled: false,
        },
        {
            id: 46,
            label: "46",
            checked: false,
            disabled: false,
        },
        {
            id: 47,
            label: "47",
            checked: false,
            disabled: false,
        },
        {
            id: 48,
            label: "48",
            checked: false,
            disabled: false,
        },
        {
            id: 88,
            label: "88",
            checked: false,
            disabled: false,
        },
        {
            id: 99,
            label: "99",
            checked: false,
            disabled: false,
        },
    ];
    @Input() smears: Array<ISmear> = [
        {
           label: "CL-V",
           id: 212,
        },
        {
            label: "B",
            id: 876,
        },
        {
            label: "D",
            id: 432, 
        },
        {
            label: "O",
            id: 444,  
        },
        {
            label: "M",
            id: 988,  
        },
        {
            label: "L/P",
            id: 100, 
        },
    ];
    
    @Output() teethToggle: EventEmitter<ITooth> = new EventEmitter();
    @Output() smearToggle: EventEmitter<number> = new EventEmitter();

    ranges: Array<IRange> = [
        {
            label: "11-18",
            range: [11, 12, 13, 14, 15, 16, 17, 18]
        },
        {
            label: "21-28",
            range: [21, 22, 23, 24, 25, 26, 27, 28]
        },
        {
            label: "31-38",
            range: [31, 32, 33, 34, 35, 36, 37, 38]
        },
        {
            label: "41-48",
            range: [41, 42, 43, 44, 45, 46, 47, 48]
        },
        {
            label: "14-18",
            range: [14, 15, 16, 17, 18]
        },
        {
            label: "13-23",
            range: [13, 12, 11, 21, 22, 23]
        },
        {
            label: "24-28",
            range: [24, 25, 26, 27, 28]
        },
        {
            label: "34-38",
            range: [34, 35, 36, 37, 38]
        },
        {
            label: "33-43",
            range: [33, 32, 31, 41, 42, 43]
        },
        {
            label: "44-48",
            range: [44, 45, 46, 47, 48]
        },
        {
            label: "לסת עליונה",
            range: [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28]
        },
        {
            label: "לסת תחתונה",
            range: [48, 47 , 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38]
        },
    ]
    
    isRangeMarked(range: Array<number>): boolean {
        return range.every(
            (value: number): boolean => { 
                return this.teeth.filter(
                    (tooth: ITooth): ITooth => {
                        if(tooth.checked) {
                            return tooth;
                        } 
                    }
                ).map(
                    (tooth: ITooth): number => tooth.id
                ).indexOf(value) != -1; 
            }
        );
    }

    toogleRange(range: Array<number>, isPressed: boolean): void {
        this.teeth.forEach(
            (tooth: ITooth): void => {
                if(range.indexOf(tooth.id) != -1) {     
                    tooth.checked = !isPressed;

                    this.teethToggle.emit(tooth);
                }
        });
    }


}

