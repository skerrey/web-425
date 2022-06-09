/**
============================================
; Title: Assignment 2.4 - Routing in Action
; File Name: composer-list.component.ts
; Author: Professor Krasso
; Date: 5 June 2022
; Modified By: Seth Kerrey
; Description:
;   composer-list component TypeScript for composer-app
; Resources:
;   buwebdev, Professor Krasso, Bellevue University
;   Stack Overflow Array in Angular
;     https://stackoverflow.com/questions/47090080/add-items-in-array-angular-4
===========================================
*/

import { Component, OnInit } from '@angular/core';

// person object
export default class Composer {
  // local variables
  fullName: string;
  genre: string;
  number: number;

  // passes in local variables, instantiates class
  constructor(number: number, fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
    this.number = number;
  }

  // test variables are added correctly
  toString() {
    console.log(`\n  Full name: ${this.fullName}\n  Genre: ${this.genre}`);
  }
}


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>; // Composers array

  constructor() {
    this.composers = [ // initialize new Composer obj
      new Composer(1, "Ludwig van Beethoven", "Classical"),
      new Composer(2, "Wolfgang Amadeus", "Classical, Children's"),
      new Composer(3, "Johann Sebastian Bach", "Classical"),
      new Composer(4, "Frederic Chopin", "Classical, Jazz"),
      new Composer(5, "Johannes Brahms", "Classical")
    ]
    this.composers.toString();
   }

  ngOnInit(): void {
  }

}
