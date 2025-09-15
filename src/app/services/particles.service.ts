import { ChangeDetectorRef, Injectable } from '@angular/core';
import { NgParticlesService } from '@tsparticles/angular';
import { ISourceOptions } from '@tsparticles/engine';

@Injectable({
  providedIn: 'root'
})
export class ParticlesService {

  constructor(
    private ngParticlesService: NgParticlesService,
    private cdr: ChangeDetectorRef
  ) { }

  // particles
  id = 'tsparticles';
  fire = 0;
  particlesVisible = true;

  // Optimized default configuration
  particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
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
          quantity: 4,
        },
        repulse: {
          distance: 100,
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
        distance: 120,
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
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  // Simplified lightweight config options
  configPart = [
    {
      label: 'Default Links',
      value: this.particlesOptions
    },
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
          links: {
            enable: false,
          },
          size: {
            value: { min: 2, max: 6 },
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
    {
      label: 'Bubbles',
      value: {
        ...this.particlesOptions,
        particles: {
          ...this.particlesOptions.particles,
          links: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "top" as const,
          },
          size: {
            value: { min: 3, max: 8 },
          },
          opacity: {
            value: 0.3,
          },
        },
      }
    },
  ];

  particlesChange(event: any) {
    console.log(event.target.selectedIndex);
    let configItem = this.configPart[event.target.selectedIndex];
    this.particlesVisible = !this.particlesVisible;
    this.cdr.detectChanges();
    this.particlesVisible = !this.particlesVisible;
    this.particlesOptions = configItem.value;
    this.cdr.detectChanges();
  }

  toggleParticlesClick(): void {
    console.log('particles clicked');
    this.particlesVisible = !this.particlesVisible;
  }


}
