/**
============================================
; Title: Assignment 4.4 - Async Pipe
; File Name: app.component.ts
; Author: Professor Krasso
; Date: 19 June 2022
; Modified By: Seth Kerrey
; Description:
;   TypeScript component for app
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
  title: string = 'Enterprise Composer App';
  assignment: string = 'Assignment 4.4 - Async Pipe'
}
