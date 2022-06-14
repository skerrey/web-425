/**
============================================
; Title: Exercise 4.2 - Inversion of Control and Dependency Injection
; File Name: composer.class.ts
; Author: Professor Krasso
; Date: 19 June 2022
; Modified By: Seth Kerrey
; Description:
;   composer service TypeScript for app
; Resources:
;   buwebdev, Professor Krasso, Bellevue University
===========================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [ // initialize new Composer obj
      {
        composerId: 100, fullName: "Ludwig van Beethoven", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Wolfgang Amadeus", genre: "Classical, Children's"
      },
      {
        composerId: 102, fullName: "Johann Sebastian Bach", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Frederic Chopin", genre: "Classical, Jazz"
      },
      {
        composerId: 104, fullName: "Johannes Brahms", genre: "Classical"
      },
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
