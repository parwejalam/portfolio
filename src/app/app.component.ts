import { Component } from '@angular/core';
import { IconsService } from './services/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
constructor(private icon :IconsService){}


}
