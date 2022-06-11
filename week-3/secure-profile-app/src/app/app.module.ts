/**
============================================
; Title: Assignment 1.5 - Componenets
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
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
