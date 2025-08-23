import { Component } from '@angular/core';
import { IconsService } from './services/icons.service';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './Contact/contact.component';
import { ScrollOnTopDirective } from './Directives/scroll-on-top.directive';
import * as aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    TopNavComponent,
    HomeComponent,
    AboutComponent,
    SkillComponent,
    ProjectComponent,
    ContactComponent,
    ScrollOnTopDirective
  ]
})
export class AppComponent {
  title = 'portfolio';
  constructor(private icon: IconsService) { }
  ngOnInit() {
    aos.init({
      duration: 3000,
    })
  }


}
