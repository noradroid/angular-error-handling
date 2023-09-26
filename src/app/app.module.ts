import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToastsModule } from 'toasts';

import { AppComponent } from './app.component';
import { ClientSideErrorInterceptor } from './client-side-error.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CommonModule, ToastsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ClientSideErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
