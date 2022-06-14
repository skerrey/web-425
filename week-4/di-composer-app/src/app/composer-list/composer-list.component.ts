/**
============================================
; Title: Exercise 4.2 - Inversion of Control and Dependency Injection
; File Name: composer-list.component.ts
; Author: Professor Krasso
; Date: 19 June 2022
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
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) { // injectable class added to constructor
    this.composers = this.composerService.getComposers(); // dependency injection to  create new class
   }

  ngOnInit(): void {
  }

}
