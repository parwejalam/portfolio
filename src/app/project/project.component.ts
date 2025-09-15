import { Component, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { ThemeService } from '../services/theme.service';


declare var ScrollReveal: any;
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: true,
  imports: [CommonModule, MdbCarouselModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectComponent implements OnInit {

  constructor(private ThemeService: ThemeService) { }
  themeColor = (this.ThemeService.getTheme()) === 'dark' ? false : true;

  projects = [
    {
      id: 1,
      title: 'Al-Qaida Learning Platform',
      description: 'A comprehensive Islamic learning platform with interactive lessons, quizzes, and progress tracking.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap'],
      src: 'assets/projects/Qaida.png',
      liveLink: 'https://letters.noble-wave.com/',
      githubLink: '',
      category: 'Web Application'
    },
    {
      id: 2,
      title: 'Al-Qaida Mobile App',
      description: 'Mobile version of the Islamic learning platform with enhanced user experience and offline capabilities.',
      technologies: ['Angular', 'Ionic', 'TypeScript', 'Capacitor'],
      src: 'assets/projects/Qaida2.png',
      liveLink: 'https://letters.noble-wave.com/',
      githubLink: '',
      category: 'Mobile Application'
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website showcasing my skills, projects, and professional experience.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap', 'Swiper'],
      src: 'assets/projects/portfolio.png',
      liveLink: 'https://parwejalam.github.io/portfolio/',
      githubLink: 'https://github.com/parwejalam/portfolio',
      category: 'Portfolio Website'
    },
    {
      id: 4,
      title: 'MEAN Stack Application',
      description: 'Full-stack web application built with MongoDB, Express.js, Angular, and Node.js with dark theme support.',
      technologies: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'TypeScript'],
      src: 'assets/projects/MEAN_Project_Dark.png',
      liveLink: '',
      githubLink: '',
      category: 'Full Stack Application'
    },
    {
      id: 5,
      title: 'MEAN Stack Application (Light)',
      description: 'Same MEAN stack application with light theme implementation and enhanced UI components.',
      technologies: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'Bootstrap'],
      src: 'assets/projects/MEAN_Project_Light.png',
      liveLink: '',
      githubLink: '',
      category: 'Full Stack Application'
    },
    {
      id: 6,
      title: 'Noble Wave Open Data Platform',
      description: 'Data visualization and analytics platform for open government data with interactive charts and insights.',
      technologies: ['Angular', 'D3.js', 'Chart.js', 'TypeScript', 'REST APIs'],
      src: 'assets/projects/Noble-wave-openData.png',
      liveLink: '',
      githubLink: '',
      category: 'Data Platform'
    },
    {
      id: 7,
      title: 'Svelte Task Tracker',
      description: 'Modern task management application built with Svelte for fast performance and smooth user experience.',
      technologies: ['Svelte', 'JavaScript', 'CSS3', 'Local Storage'],
      src: 'assets/projects/sevelt-task-tracker.png',
      liveLink: '',
      githubLink: '',
      category: 'Productivity Tool'
    },
    {
      id: 8,
      title: 'Snake Game',
      description: 'Classic snake game implementation with modern design, high scores, and responsive controls.',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Local Storage'],
      src: 'assets/projects/snake-game.png',
      liveLink: '',
      githubLink: '',
      category: 'Game Development'
    },
    {
      id: 9,
      title: 'Task Tracker Application',
      description: 'Professional task management system with team collaboration, deadlines, and progress monitoring.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Firebase'],
      src: 'assets/projects/taskTracker.png',
      liveLink: '',
      githubLink: '',
      category: 'Project Management'
    },
    {
      id: 10,
      title: 'Attendance Management System (AMS)',
      description: 'Attendance tracking and management system with employee monitoring and reporting features.',
      technologies: ['Angular', 'TypeScript', 'PostgreSQL', 'Node.js', 'Express'],
      src: 'assets/projects/AMS.png',
      liveLink: '',
      githubLink: '',
      category: 'Enterprise Software'
    }
  ];

  // Filter projects by category
  categories = ['All', 'Web Application', 'Mobile Application', 'Full Stack Application', 'Data Platform', 'Productivity Tool', 'Game Development', 'Project Management', 'Enterprise Software', 'Portfolio Website'];
  selectedCategory = 'All';

  filteredProjects = this.projects;

  ngOnInit() {
    this.initScrollReveal();
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  openProject(project: any) {
    if (project.liveLink) {
      window.open(project.liveLink, '_blank');
    }
  }

  openGithub(project: any) {
    if (project.githubLink) {
      window.open(project.githubLink, '_blank');
    }
  }

  private initScrollReveal() {
    if (typeof ScrollReveal !== 'undefined') {
      ScrollReveal().reveal('.project-card', {
        delay: 100,
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        interval: 200,
        origin: 'bottom',
        reset: false
      });

      ScrollReveal().reveal('.projects-title', {
        delay: 200,
        distance: '30px',
        duration: 800,
        easing: 'ease-in-out',
        origin: 'top'
      });

      ScrollReveal().reveal('.filter-buttons', {
        delay: 300,
        distance: '20px',
        duration: 600,
        easing: 'ease-in-out',
        origin: 'left'
      });
    }
  }
}
