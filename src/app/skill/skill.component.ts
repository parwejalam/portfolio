import { Component } from '@angular/core';
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
export class SkillComponent {
  constructor(private icon: IconsService) { }
  skills = [
    {
      name: 'Angular',
      // dec: '',
      icon: this.icon.Angular,
      color: '#ff0000',
    },
    {
      name: 'Angular Material',
      icon: this.icon.Angular,
      color: '#ff0000',
    },
    {
      name: 'Bootstrap',
      icon: this.icon.Bootstrap,
      color: '#74C0FC',
    },

    {
      name: 'javaScript',
      icon: this.icon.JavaScript,
      color: '#5b5757',
    },
    {
      name: 'CSS',
      icon: this.icon.CSS,
      color: '#5b5757',
    },
    {
      name: 'POSTGRESQL',
      icon: this.icon.Postgresql,
      color: '#5b5757',
    },
  ];
}
