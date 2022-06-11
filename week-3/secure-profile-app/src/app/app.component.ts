/**
============================================
; Title: Exercise 3.3 - Passing Data to Routes, Part 2
; File Name: app.component.ts
; Author: Professor Krasso
; Date: 12 June 2022
; Modified By: Seth Kerrey
; Description:
;   App component TypeScript for secure-profile-app
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
  title: string = "Secure Profile App";
  assignment: string = "Exercise 3.3 - Passing Data to Routes, Part 2";
}
