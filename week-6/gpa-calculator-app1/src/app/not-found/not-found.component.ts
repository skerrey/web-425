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
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
