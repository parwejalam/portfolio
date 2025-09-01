import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { IconsService } from '../services/icons.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule]
})
export class SkillComponent implements OnInit, AfterViewInit {

  constructor(private icon: IconsService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    // Initialize progress bar animations when skills come into view
    this.initializeProgressAnimations();
  }

  private initializeProgressAnimations(): void {
    const progressBars = this.elementRef.nativeElement.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target as HTMLElement;
          progressBar.style.animationPlayState = 'running';
          observer.unobserve(progressBar);
        }
      });
    }, { threshold: 0.5 });

    progressBars.forEach((bar: Element) => {
      const htmlBar = bar as HTMLElement;
      htmlBar.style.animationPlayState = 'paused';
      observer.observe(htmlBar);
    });
  }

  skillCategories = [
    {
      title: '🚀 Frontend',
      icon: 'fas fa-code',
      color: '#dd0f24',
      skills: [
        {
          name: 'Angular',
          description: 'SPA development, reactive forms, routing, RxJS',
          icon: this.icon.Angular,
          proficiency: 95,
          color: '#dd1b16'
        },
        {
          name: 'Ionic',
          description: 'Hybrid mobile UI',
          icon: this.icon.Ionic, // You can update this if you have an Ionic icon
          proficiency: 70,
          color: '#3880ff'
        },
        {
          name: 'Bootstrap & Tailwind CSS',
          description: 'Responsive design, modern layouts',
          icon: this.icon.Bootstrap,
          proficiency: 80,
          color: '#7952b3'
        },
        {
          name: 'HTML5, CSS3, JavaScript',
          description: 'ES6+',
          icon: this.icon.JavaScript,
          proficiency: 95,
          color: '#f7df1e'
        }
      ]
    },
    {
      title: '⚡ Backend',
      icon: 'fas fa-server',
      color: '#28a745',
      skills: [
        {
          name: 'Node.js',
          description: 'Express.js, REST APIs',
          icon: this.icon.JavaScript, // You can update this if you have a Node.js icon
          proficiency: 70,
          color: '#339933'
        },
        {
          name: 'PostgreSQL',
          description: 'Database design, queries',
          icon: this.icon.Postgresql,
          proficiency: 60,
          color: '#336791'
        },
        {
          name: 'Firebase',
          description: 'Authentication, hosting, real-time DB',
          icon: this.icon.Firebase, // You can update this if you have a Firebase icon
          proficiency: 55,
          color: '#c40000ff'
        }
      ]
    },
    {
      title: '📱 Mobile & Cross-Platform',
      icon: 'fas fa-mobile-alt',
      color: '#17a2b8',
      skills: [
        {
          name: 'Capacitor',
          description: 'Convert Angular apps to mobile, push notifications, device APIs',
          icon: this.icon.Angular, // You can update this if you have a Capacitor icon
          proficiency: 80,
          color: '#119eff'
        },
        {
          name: 'Ionic',
          description: 'Cross-platform mobile apps',
          icon: this.icon.Ionic, // You can update this if you have an Ionic icon
          proficiency: 75,
          color: '#3880ff'
        }
      ]
    },
    {
      title: '🛠️ Tools & Platforms',
      icon: 'fas fa-tools',
      color: '#6f42c1',
      skills: [
        {
          name: 'Git & GitHub',
          description: 'Version control, CI/CD',
          icon: this.icon.Github, // You can update this if you have a Git icon
          proficiency: 90,
          color: 'var(--text-color)'
        },
        {
          name: 'Railway & Firebase',
          description: 'Deployment & hosting',
          icon: this.icon.Firebase, // You can update this if you have deployment icons
          proficiency: 70,
          color: '#c40000ff'
        },
        {
          name: 'VS Code',
          description: 'Primary IDE',
          icon: this.icon.Angular, // You can update this if you have a VS Code icon
          proficiency: 95,
          color: '#007acc'
        }
      ]
    },
    {
      title: '🌟 Others',
      icon: 'fas fa-star',
      color: '#ffc107',
      skills: [
        {
          name: 'Reusable Angular Components',
          description: 'Component development',
          icon: this.icon.Angular,
          proficiency: 90,
          color: '#dd1b16'
        },
        {
          name: 'Library Customization',
          description: 'e.g., ngx-mat-intl-tel-input',
          icon: this.icon.LibraryCustomization,
          proficiency: 85,
          color: '#ff6b6b'
        },
        {
          name: 'API Integration',
          description: 'Validation handling',
          icon: this.icon.JavaScript,
          proficiency: 88,
          color: '#20c997'
        }
      ]
    }
  ];
}
