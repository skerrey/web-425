/**
============================================
; Title: Assignment 1.5 - Components
; File Name: my-details.component.ts
; Author: Professor Krasso
; Date: 29 May 2022
; Modified By: Seth Kerrey
; Description:
;   my-details component TypeScript
; Resources:
;   buwebdev, Professor Krasso, Bellevue University
===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
