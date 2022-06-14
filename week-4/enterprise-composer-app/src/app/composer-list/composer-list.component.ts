/**
============================================
; Title: Exercise 4.3 - Handling Form Events with Observables
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
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;
  txtSearchControl = new FormControl(''); // empty string search

  constructor(private composerService: ComposerService) { // injectable class added to constructor
    this.composers = this.composerService.getComposers(); // dependency injection to  create new class

    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filerComposers(val)) // listen for change to search (500ms)
   }

  ngOnInit(): void {
  }

  filerComposers(name: string) {
    alert(name); // display changes to search as alert
  }

}
