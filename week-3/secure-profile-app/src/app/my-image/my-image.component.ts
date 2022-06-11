/**
============================================
; Title: Assignment 1.5 - Components
; File Name: my-image.component.ts
; Author: Professor Krasso
; Date: 29 May 2022
; Modified By: Seth Kerrey
; Description:
;   my-image component TypeScript
; Resources:
;   buwebdev, Professor Krasso, Bellevue University
===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
