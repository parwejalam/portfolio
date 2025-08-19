// src/app/theme.service.ts
import { Injectable } from '@angular/core';
// import { ParticlesService } from './particles.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: 'light' | 'dark' = 'dark';

  constructor() {
    this.loadTheme();
  }
  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme();
  }

  getTheme(): 'dark' | 'light' {
    return this.theme;
  }

  private applyTheme(): void {
    document.body.className = this.theme;
    localStorage.setItem('theme', this.theme);
  }

  private loadTheme(): void {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {

      if (storedTheme === 'light') {
        this.theme = storedTheme;
        this.applyTheme();
        // this.toggleParticle.toggleParticlesClick()

      }
      this.theme = storedTheme;
      this.applyTheme();
    }
  }
}
