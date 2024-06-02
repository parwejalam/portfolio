// src/app/theme-toggle/theme-toggle.component.ts
import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';



@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  themeIcon?: string ;

  constructor(private themeService: ThemeService) {
    this.updateIcon();
  }
  // theme = this.themeService.theme;
  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.updateIcon();
  }
  updateIcon(): void {
    this.themeIcon =
      this.themeService.getTheme() === 'light' ? 'fas fa-moon' : 'fas fa-sun';
      
  }

  

 
}
