/**
============================================
; Title: Exercise 6.3 - Layouts
; Author: Professor Krasso
; Date: 3 July 2022
; Modified By: Seth Kerrey
; Description: learning how to create reusable layouts in Angular
; Code Attribution: Additional code from WEB 425 Week 6 exercises and videos
===========================================
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = "Exercise 6.3 - Layouts"
  }

  ngOnInit(): void {
  }

}
