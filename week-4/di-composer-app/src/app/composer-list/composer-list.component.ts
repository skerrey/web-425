/**
============================================
; Title: Exercise 3.2 - Passing Data to Routes, Part 1
; File Name: composer-list.component.ts
; Author: Professor Krasso
; Date: 12 June 2022
; Modified By: Seth Kerrey
; Description:
;   composer-list component TypeScript for app
; Resources:
;   buwebdev, Professor Krasso, Bellevue University
;   Stack Overflow Array in Angular
;     https://stackoverflow.com/questions/47090080/add-items-in-array-angular-4
===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers();
   }

  ngOnInit(): void {
  }

}
