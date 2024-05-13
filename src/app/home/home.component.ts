import {  Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TxtType } from '../services/txt-type.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'angular';

  
// Typing Effect
  @ViewChild('typingEffect', { static: true }) typingEffect!: ElementRef;

  ngAfterViewInit() {
      const phrases = ["Welcome to my Portfolio!", "I'm Angular Developer."];
      new TxtType(this.typingEffect.nativeElement, phrases);
  }

  
  
}
