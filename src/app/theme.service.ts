// src/app/theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: 'light' | 'dark' = 'light';

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme();
  }

  getTheme(): 'light' | 'dark' {
    return this.theme;
  }

  private applyTheme(): void {
    document.body.className = this.theme;
    localStorage.setItem('theme', this.theme);
  }

  private loadTheme(): void {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (storedTheme) {
      this.theme = storedTheme;
      this.applyTheme();
    }
  }
}
