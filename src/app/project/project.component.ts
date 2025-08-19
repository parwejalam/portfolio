import { Component } from '@angular/core'
import { CommonModule } from '@angular/common';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
declare var ScrollReveal: any;
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: true,
  imports: [CommonModule, MdbCarouselModule]
})
export class ProjectComponent {

  projects = [
    {
      src: 'assets/projects/AMS.png',
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
