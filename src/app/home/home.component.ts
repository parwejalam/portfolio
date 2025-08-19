import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TxtType } from '../services/txt-type.service';
import { IconsService } from '../services/icons.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule]
})
export class HomeComponent {
  title = 'angular';
  constructor(private icons: IconsService) { }
  socialIcons = this.icons.socialIcons;

  // Typing Effect
  @ViewChild('typingEffect', { static: true }) typingEffect!: ElementRef;

  ngAfterViewInit() {
    const phrases = ["Welcome to my Portfolio!", "An Angular Developer."];
    new TxtType(this.typingEffect.nativeElement, phrases);
  }



}
