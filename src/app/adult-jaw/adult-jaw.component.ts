import { Component, Input, Output, EventEmitter } from '@angular/core';

interface ITooth {
    label: string;
    id: number
}

interface ISmear {
    label: string;
    id: number,
}

interface IRange {
    label: string;
    range: Array<number>
}

const MAX_SMEARS_ALLOWED: number = 3;
const NO_TOOTH_SELECTED_ALERT: string = "At least one tooth must be selected in order to choose a smear";
const SMEARS_OVERFLOW_ALERT: string = `Maximum number of smears allowed is ${MAX_SMEARS_ALLOWED}`;

@Component({
  selector: 'adult-jaw',
  templateUrl: './adult-jaw.component.html',
  styleUrls: ['./adult-jaw.component.scss']
})

export class AdultJaw {
    @Input() selectedTeeth: Array<number> = [];
    @Input() selectedSmears: Array<number> = [];

    @Output() teethChange: EventEmitter<number[]> = new EventEmitter();
    @Output() smearChange: EventEmitter<number[]> = new EventEmitter();
    @Output() alert: EventEmitter<string> = new EventEmitter();

    teeth: Array<ITooth> = [
        {
            id: 18,
            label: "18",
        },
        {
            id: 17,
            label: "17",
        },
        {
            id: 16,
            label: "16",
        },
        {
            id: 15,
            label: "15",
        },
        {
            id: 14,
            label: "14",
        },
        {
            id: 13,
            label: "13",
        },
        {
            id: 12,
            label: "12",
        },
        {
            id: 11,
            label: "11",
        },
        {
            id: 21,
            label: "21",
        },
        {
            id: 22,
            label: "22",
        },
        {
            id: 23,
            label: "23",
        },
        {
            id: 24,
            label: "24",
        },
        {
            id: 25,
            label: "25",
        },
        {
            id: 26,
            label: "26",
        },
        {
            id: 27,
            label: "27",
        },
        {
            id: 28,
            label: "28",
        },
        {
            id: 38,
            label: "38",
        },
        {
            id: 37,
            label: "37",
        },
        {
            id: 36,
            label: "36",
        },
        {
            id: 35,
            label: "35",
        },
        {
            id: 34,
            label: "34",
        },
        {
            id: 33,
            label: "33",
        },
        {
            id: 32,
            label: "32",
        },
        {
            id: 31,
            label: "31",
        },
        {
            id: 41,
            label: "41",
        },
        {
            id: 42,
            label: "42",
        },
        {
            id: 43,
            label: "43",
        },
        {
            id: 44,
            label: "44",
        },
        {
            id: 45,
            label: "45",
        },
        {
            id: 46,
            label: "46",
        },
        {
            id: 47,
            label: "47",
        },
        {
            id: 48,
            label: "48",
        },
        {
            id: 88,
            label: "88",
        },
        {
            id: 99,
            label: "99",
        },
    ];
    smears: Array<ISmear> = [
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
    
    isItemExist(collection: Array<number>, itemId: number): boolean {
        return collection.indexOf(
            itemId
        ) != -1
    }

    selectTooth(toothId: number): void {
        this.selectedTeeth.push(
            toothId
        );
    }

    unSelectTooth(toothId: number): void {
        this.selectedTeeth.splice(
            this.selectedTeeth.indexOf(toothId),
            1
        );

        if(!this.selectedTeeth.length){
            this.selectedSmears = [];
            this.smearChange.emit(this.selectedSmears);
        }
    }

    selectSmear(smearId: number): void {
        if(!this.selectedTeeth.length) {
            this.alert.emit(NO_TOOTH_SELECTED_ALERT);
            return;
        }

        if(this.selectedSmears.length == MAX_SMEARS_ALLOWED) {
            this.alert.emit(SMEARS_OVERFLOW_ALERT);
            return;
        }

        this.selectedSmears.push(
            smearId
        );
    }

    unSelectSmear(smearId: number): void {
        this.selectedSmears.splice(
            this.selectedSmears.indexOf(smearId),
            1
        );
    }

    isTeethRangeMarked(range: Array<number>): boolean {
        return range.every(
            (value: number): boolean => { 
                return this.selectedTeeth.indexOf(
                    value
                ) != -1; 
            }
        );
    }

    toogleTeethRange(range: Array<number>, pressed: boolean): void {
        range.forEach(
            (toothId: number) => {
                if(!pressed) {
                    this.selectedTeeth.indexOf(
                        toothId
                    ) == -1 ? this.selectTooth(toothId) : null; 
                } else {
                    this.unSelectTooth(toothId);
                }
            }
        );
        this.teethChange.emit(this.selectedTeeth);
    }

}

              

