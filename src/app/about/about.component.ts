import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ThemeService } from '../services/theme.service';
import { Subscription } from 'rxjs';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit, OnDestroy {
  activeTab: string = 'experience';
  currentTheme: 'light' | 'dark' = 'dark';
  private themeSubscription: Subscription = new Subscription();

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    });

    // Subscribe to theme changes
    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
      // Refresh AOS when theme changes to update animations
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    });

    // Get initial theme
    this.currentTheme = this.themeService.getTheme();
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    this.themeSubscription.unsubscribe();
    AOS.refresh();
  }

  showContent(tab: string): void {
    this.activeTab = tab;
  }
}