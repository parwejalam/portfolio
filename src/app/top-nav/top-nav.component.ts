import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TopNavComponent implements OnInit {
  // NavBarCollapes
  isNavbarCollapsed = false;
  navLinks = [
    { label: 'Home', id: '#home' },
    { label: 'About', id: '#about' },
    { label: 'Skills', id: '#skills' },
    { label: 'Projects', id: '#projects' },
    { label: 'Contact', id: '#contact' },
  ];

  toggleNav() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  // theme methods and services
  themeIcon?: string;

  constructor(
    private themeService: ThemeService,
    private cdr: ChangeDetectorRef
  ) {
  }
  
  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.updateIcon();
  }
  
  updateIcon(): void {
    this.themeIcon =
      this.themeService.getTheme() === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  }

  ngOnInit(): void {
    // Update icon after theme service has loaded from localStorage
    this.updateIcon();
  }
}
