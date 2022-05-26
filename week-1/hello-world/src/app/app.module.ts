/**
============================================
; Title: Exercise 1.2 - Hello World!
; File Name: app.module.ts
; Author: Professor Krasso
; Date: 29 May 2022
; Modified By: Seth Kerrey
; Description:
;   App module TypeScript
; Resources:
;   buwebdev, Professor Krasso, Bellevue University
===========================================
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
