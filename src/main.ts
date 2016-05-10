import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';


import {MainAppComponent, environment} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(MainAppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);
