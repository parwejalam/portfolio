import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ScrollOnTop]',
})
export class ScrollOnTopDirective {

  constructor(private el : ElementRef) { }
  @HostListener('click')
  onClicked(){
    window.scrollTo({top:0 , behavior:'smooth'})
  }

}