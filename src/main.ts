import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { register } from 'swiper/element/bundle';
import AOS from 'aos';

register();

// Initialize AOS globally
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
