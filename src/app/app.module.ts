import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToastsModule } from 'toasts';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CommonModule, ToastsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
