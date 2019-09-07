import { Directive, ElementRef, AfterViewChecked } from '@angular/core';

@Directive({
    selector: '[isOverflow]'
})
export class isOverflow implements AfterViewChecked {
    constructor(
        private element: ElementRef
    ) { }

    ngAfterViewChecked(): void {
        if (
            this.element.nativeElement.offsetHeight < this.element.nativeElement.scrollHeight || 
            this.element.nativeElement.offsetWidth < this.element.nativeElement.scrollWidth
        ) {
            this.element.nativeElement.style['overflow-x'] = "scroll";
        } else {
            this.element.nativeElement.style['overflow-x'] = "hidden";
        }
    }
}