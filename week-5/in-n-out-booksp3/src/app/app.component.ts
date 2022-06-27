/**
============================================
; Title: Assignment 5.4 - Dialogs
; Author: Professor Krasso
; Date: 26 June 2022
; Modified By: Seth Kerrey
; Description: how to implement navigation using Angular Material
; Code Attribution: Additional code from WEB 425 Week 5 exercises and videos
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
    this.assignment = "Assignment 5.4 - Dialogs"
  }

}
