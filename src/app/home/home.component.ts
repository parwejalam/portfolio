import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { TxtType } from '../services/txt-type.service';
import { IconsService } from '../services/icons.service';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxParticlesModule } from '@tsparticles/angular';

// particles
import type { Container, Engine, ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { NgParticlesService } from '@tsparticles/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgxParticlesModule]
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  title = 'angular';
  private themeSubscription: Subscription = new Subscription();
  particlesLoading = true; // Track particles loading state

  constructor(
    private icons: IconsService,
    private ngParticlesService: NgParticlesService,
    private cdr: ChangeDetectorRef,
    private themeService: ThemeService
  ) { }
  socialIcons = this.icons.socialIcons;

  // Typing Effect
  @ViewChild('typingEffect', { static: true }) typingEffect!: ElementRef;

  // Particles configuration - Optimized for fast loading
  particlesId = 'home-particles';
  particlesVisible = true;
  particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60, // Reduced from 120 for better performance
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4, // Reduced from 10
        },
        repulse: {
          distance: 100, // Reduced from 200
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 120, // Reduced from 150
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2, // Reduced from 3
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80, // Reduced from 200 for faster loading
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 }, // Reduced max size from 5 to 3
      },
    },
    detectRetina: true,
  };

  // Simplified config options for better performance
  configPart = [
    { label: 'Default Links', value: this.particlesOptions },
    {
      label: 'Snow Effect',
      value: {
        ...this.particlesOptions,
        particles: {
          ...this.particlesOptions.particles,
          move: {
            direction: "bottom" as const,
            enable: true,
            speed: 1,
            straight: false,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 6 },
          },
          links: {
            enable: false,
          },
        },
      }
    },
    {
      label: 'Minimal Dots',
      value: {
        ...this.particlesOptions,
        particles: {
          ...this.particlesOptions.particles,
          number: {
            value: 30,
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
      }
    },
    {
      label: 'Network',
      value: {
        ...this.particlesOptions,
        particles: {
          ...this.particlesOptions.particles,
          number: {
            value: 60,
          },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 0.4,
            width: 2,
          },
        },
      }
    },
  ];

  ngAfterViewInit() {
    const phrases = ["Welcome to my Portfolio!", "An Angular Developer."];
    new TxtType(this.typingEffect.nativeElement, phrases);
  }

  ngOnInit(): void {
    // Defer particle initialization to improve initial load time
    requestAnimationFrame(() => {
      this.initializeParticlesAsync();
    });

    // Update particles when theme changes
    this.updateParticleColors();

    // Subscribe to theme changes
    this.themeSubscription = this.themeService.theme$.subscribe(() => {
      this.updateParticleColors();
      // Refresh particles to apply new colors
      this.particlesVisible = false;
      this.cdr.detectChanges();

      setTimeout(() => {
        this.particlesVisible = true;
        this.cdr.detectChanges();
      }, 100);
    });
  }

  private async initializeParticlesAsync(): Promise<void> {
    try {
      await this.ngParticlesService.init(async (engine: Engine) => {
        console.log('Home Particles Engine Loaded', engine);
        await loadSlim(engine);
      });

      // Short delay to ensure particles start rendering
      setTimeout(() => {
        if (this.particlesLoading) {
          this.particlesLoading = false;
          this.cdr.detectChanges();
        }
      }, 1000);

    } catch (error) {
      console.error('Failed to initialize particles:', error);
      // Fallback: disable particles if initialization fails
      this.particlesVisible = false;
      this.particlesLoading = false;
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  // Get theme-appropriate colors for particles
  private getParticleColors() {
    const isDark = this.themeService.getTheme() === 'dark';
    return {
      particle: isDark ? '#8a0000ff' : '#db1515ff',
      links: isDark ? '#ffffff' : '#000000',
      opacity: isDark ? 0.5 : 0.3
    };
  }

  // Update particle colors based on current theme
  private updateParticleColors() {
    const colors = this.getParticleColors();
    const currentLinks = this.particlesOptions.particles?.['links'] || {};

    this.particlesOptions = {
      ...this.particlesOptions,
      particles: {
        ...this.particlesOptions.particles,
        color: {
          value: colors.particle,
        },
        links: {
          color: colors.links,
          distance: 150,
          enable: true,
          opacity: colors.opacity,
          width: 1,
        },
        opacity: {
          value: colors.opacity,
        },
      },
    };
  }

  public particlesLoaded(container: Container): void {
    console.log('Home particles loaded', container);
    this.particlesLoading = false; // Particles are now loaded
    this.cdr.detectChanges();
  }

  // Particles control methods
  particlesChange(event: any) {
    const selectedIndex = parseInt(event.target.value);
    console.log('Selected particle config:', selectedIndex, this.configPart[selectedIndex].label);

    if (selectedIndex >= 0 && selectedIndex < this.configPart.length) {
      let configItem = this.configPart[selectedIndex];
      this.particlesVisible = false;
      this.cdr.detectChanges();

      setTimeout(() => {
        this.particlesOptions = configItem.value;
        this.particlesVisible = true;
        this.cdr.detectChanges();
      }, 100);
    }
  }

  toggleParticlesClick(): void {
    console.log('home particles visibility toggled');
    this.particlesVisible = !this.particlesVisible;
    this.cdr.detectChanges();
  }

  // Method to update particles when theme changes (can be called from parent or theme service)
  updateTheme(): void {
    this.updateParticleColors();
    this.particlesVisible = false;
    this.cdr.detectChanges();

    setTimeout(() => {
      this.particlesVisible = true;
      this.cdr.detectChanges();
    }, 100);
  }



}
