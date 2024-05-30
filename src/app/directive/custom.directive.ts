import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el : ElementRef) { 
    el.nativeElement.style.backgroundColor = 'blanchedalmond';
    el.nativeElement.style.padding = '2rem'
    el.nativeElement.style.fontWeight = 'bold'
   }

}
