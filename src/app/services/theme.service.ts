// src/app/theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { ParticlesService } from './particles.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: 'light' | 'dark' = 'dark';
  private themeSubject = new BehaviorSubject<'light' | 'dark'>(this.theme);
  
  // Observable for components to subscribe to theme changes
  public theme$ = this.themeSubject.asObservable();

  constructor() {
    this.loadTheme();
  }
  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme();
    this.themeSubject.next(this.theme); // Notify subscribers
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
      this.theme = storedTheme;
    } else {
      // Default to dark theme if no preference is stored
      this.theme = 'dark';
    }
    this.applyTheme();
    this.themeSubject.next(this.theme); // Notify subscribers about initial theme
  }
}
