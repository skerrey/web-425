/**
============================================
; Title: Assignment 6.4 - Input Properties
; Author: Professor Krasso
; Date: 3 July 2022
; Modified By: Seth Kerrey
; Description: learning how to create input properties in Angular
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
    this.assignment = "Assignment 6.4 - Input Properties"
  }

  ngOnInit(): void {
  }

}
