import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule,} from '@angular/forms';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideClientHydration(),provideHttpClient(),
    provideToastr({positionClass:"toast-bottom-right"}), provideAnimations(), ]
};

