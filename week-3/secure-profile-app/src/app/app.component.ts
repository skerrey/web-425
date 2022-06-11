/**
============================================
; Title: Exercise 2.3 - Data Binding
; File Name: app.component.ts
; Author: Professor Krasso
; Date: 5 June 2022
; Modified By: Seth Kerrey
; Description:
;   TypeScript app component
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
  isLoggedIn: Boolean = true;
  assignment: string = "Exercise 2.3 - Data Binding";
}
