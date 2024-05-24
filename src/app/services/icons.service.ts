import { Injectable } from '@angular/core';
import {
  faAngular,
  faBootstrap,
  faCss3,
  faFacebook,
  faGithub,
  faInstagram,
  faJs,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor() {}

  socialIcons = [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/profile.php?id=100022510388187',
      icon: faFacebook,
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/parwejalam__/',
      icon: faInstagram,
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/parwej-alam-3619412b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      icon: faLinkedin,
    },
    {
      name: 'github',
      link: 'https://github.com/parwejalam',
      icon: faGithub,
    },
    {
      name: 'twitter',
      link: 'https://x.com/parwejalam__?t=r3FGjjqz-x9GzSXXdIOf_A&s=09 ',
      icon: faTwitter,
    },
  ];

  Envelope = faEnvelope;
  Angular = faAngular;
  Bootstrap = faBootstrap;
  JavaScript = faJs;
  CSS = faCss3;
  Postgresql = faDatabase;
  PaperPlane = faPaperPlane;
}
