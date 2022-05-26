/**
============================================
; Title: Exercise 1.2 - Hello World!
; File Name: app.component.ts
; Author: Professor Krasso
; Date: 29 May 2022
; Modified By: Seth Kerrey
; Description:
;   App components TypeScript
; Resources:
;   buwebdev, Professor Krasso, Bellevue University
===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Seth Kerrey's World"
}
