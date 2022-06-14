/**
============================================
; Title: Assignment 2.4 - Routing in Action
; File Name: about.component.ts
; Author: Professor Krasso
; Date: 5 June 2022
; Modified By: Seth Kerrey
; Description:
;   about component TypeScript for app
; Resources:
;   buwebdev, Professor Krasso, Bellevue University
===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
