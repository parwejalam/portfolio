import { Component } from '@angular/core';
import { AppModule } from '../app.module';

declare var ScrollReveal: any;
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent  {

  projects = [
    {
      src:'assets/projects/AMS.png',
      link:''
    },
    {
      src:'assets/projects/AMS.png',
      link:''
    },
    {
      src:'assets/projects/AMS.png',
      link:''
    },
    {
      src:'assets/projects/AMS.png',
      link:''
    },
    {
      src:'assets/projects/AMS.png',
      link:''
    },
    {
      src:'assets/projects/AMS.png',
      link:''
    }
  ]
}
