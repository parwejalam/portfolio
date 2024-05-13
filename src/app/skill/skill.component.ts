import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  skills = [
    {
      name: 'Angular',
      dec: '',
      icon: 'fa-brands fa-angular fa-bounce',
      color: '#ff0000',
    },
    {
      name: 'Angular Material',
      icon: 'fa-brands fa-angular',
      color: '#ff0000',
    },
    {
      name: 'Bootstrap',
      icon: 'fa-brands fa-bootstrap fa-beat',
      color: '#74C0FC',
    },

    {
      name: 'javaScript',
      icon: 'fa-brands fa-js fa-beat ',
      color: '#5b5757',
    },
    {
      name: 'CSS',
      icon: 'fa-brands fa-css3-alt',
      color: '#5b5757',
    },
    {
      name: 'POSTGRESQL',
      icon: 'fa-brands fa-html5',
      color: '#5b5757',
    },
  ];
}
