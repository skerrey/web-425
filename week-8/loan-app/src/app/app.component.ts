/**
============================================
; Title: Exercise 8.2 - Server-Side Communications
; Author: Professor Krasso
; Date: 17 July 2022
; Modified By: Seth Kerrey
; Description: how to communicate with a middleware API
; Code Attribution: Additional code from WEB 425 Week 8 exercises and videos
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = "Welcome to In-N-Out-Books"
  }

}
