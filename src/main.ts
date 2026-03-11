import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLocaleData } from '@angular/common';
import localeEnIn from '@angular/common/locales/en-IN';
import { AppModule } from './app/app.module';

registerLocaleData(localeEnIn);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
