/**
============================================
; Title: Exercise 6.2 - Output Properties
; Author: Professor Krasso
; Date: 3 July 2022
; Modified By: Seth Kerrey
; Description: how to implement Output Properties
; Code Attribution: Additional code from WEB 425 Week 6 exercises and videos
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
    this.assignment = "Exercise 6.2 - Input/Output Properties, Part 1"
  }

}
