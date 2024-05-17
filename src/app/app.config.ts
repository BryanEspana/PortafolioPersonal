import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};


// app.config.ts
export const AppConfig = {
  apiUrl: 'https://api.example.com',
  otherConfig: 'value'
};

// app.config.server.ts
export const ServerConfig = {
  serverUrl: 'https://server.example.com',
  otherServerConfig: 'value'
};
