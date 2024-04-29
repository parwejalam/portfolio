import { Component } from '@angular/core';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {

  link=[
    {
      home:'Home',
      about:'About',
      project:'Prjects'
    },
    {
     link1: '/home',
      link2:'/about'
    },
    {
    
      link:'/project'
    }
  ]

}
