import { Component, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { ThemeService } from '../services/theme.service';
import Swiper from 'swiper';


declare var ScrollReveal: any;
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: true,
  imports: [CommonModule, MdbCarouselModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectComponent {

  constructor(private ThemeService: ThemeService) { }
  themeColor = (this.ThemeService.getTheme()) === 'dark' ? false : true;

  projects = [
    {
      src: 'assets/projects/Qaida.png',
      link: ''
    },
    {
      src: 'assets/projects/Qaida2.png',
      link: ''
    },
    {
      src: 'assets/projects/portfolio.png',
      link: ''
    },
    {
      src: 'assets/projects/MEAN_Project_Dark.png',
      link: ''
    },
    {
      src: 'assets/projects/MEAN_Project_Light.png',
      link: ''
    },
    {
      src: 'assets/projects/Noble-wave-openData.png',
      link: ''
    },
    {
      src: 'assets/projects/sevelt-task-tracker.png',
      link: ''
    },
    {
      src: 'assets/projects/snake-game.png',
      link: ''
    },
    {
      src: 'assets/projects/taskTracker.png',
      link: ''
    },
    {
      src: 'assets/projects/AMS.png',
      link: ''
    },
  ]
}
