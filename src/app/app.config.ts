import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxParticlesModule } from '@tsparticles/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideClientHydration(),
        provideAnimations(),
        importProvidersFrom(
            FormsModule,
            NgxParticlesModule,
            FontAwesomeModule,
            MdbCarouselModule
        )
    ]
};
