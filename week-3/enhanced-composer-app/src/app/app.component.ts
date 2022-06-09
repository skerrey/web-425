/**
============================================
; Title: Exercise 3.2 - Passing Data to Routes
; File Name: app.component.ts
; Author: Professor Krasso
; Date: 12 June 2022
; Modified By: Seth Kerrey
; Description:
;   app component TypeScript for composer-app
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
  title = 'Enhanced Composer App';
  assignment = 'Exercise 3.2 - Passing Data to Routes, Part 1'
}
