import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

// particles
import type { Container, Engine, ISourceOptions } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import configs from '@tsparticles/configs';
import { NgParticlesService } from '@tsparticles/angular';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  link = [
    {
      home: 'Home',
      about: 'About',
      project: 'Prjects',
    },
    {
      link1: '/home',
      link2: '/about',
    },
    {
      link: '/project',
    },
  ];

  // theme methods and services
  themeIcon?: string;

  constructor(
    private themeService: ThemeService,
    private ngParticlesService: NgParticlesService
  ) {
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

  // particles
  id = 'tsparticles';
  fire = 0;
  particlesVisible = true;
  fireworksVisible = false;
  confettiVisible = false;
  particlesOptions: ISourceOptions = configs.delay; //delay,motionDisable, grabRandomColor,linkTriangles,repulseBack

  // constructor(private ngParticlesService: NgParticlesService) {}

  confettiOptions = {
    particleCount: 1000,
    spread: 10,
    origin: { y: 0.6 },
  };
  fireworksOptions = {};

  toggleParticlesClick(): void {
    console.log('particles clicked');

    this.particlesVisible = !this.particlesVisible;
  }

  toggleFireworksClick(): void {
    console.log('fireworks clicked');

    this.fireworksVisible = !this.fireworksVisible;
  }

  toggleConfettiClick(): void {
    console.log('confetti clicked');

    this.fire = Math.random() + 1;
    this.confettiVisible = !this.confettiVisible;
  }

  ngOnInit(): void {
    void this.ngParticlesService.init(async (engine: Engine) => {
      console.log('init', engine);

      await loadFull(engine);
    });
  }

  public particlesLoaded(container: Container): void {
    console.log('loaded', container);
  }
}
