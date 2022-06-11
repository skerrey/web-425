/**
============================================
; Title: Exercise 2.3 - Data Binding
; File Name: my-details.component.ts
; Author: Professor Krasso
; Date: 5 June 2022
; Modified By: Seth Kerrey
; Description:
;   my-details component TypeScript
; Resources:
;   buwebdev, Professor Krasso, Bellevue University
===========================================
*/

import { Component, OnInit } from '@angular/core';

// person object
export default class Person {
  // local variables
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2022", "#CodingWithAngular", "#ngOmaha"
  ];

  // passes in local variables, instantiates class
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  // test variables are added correctly
  toString() {
    console.log(`\n  Full name: ${this.fullName}\n  Favorite food: ${this.favoriteFood}\n  Favorite color: ${this.favoriteColor}`);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person; // Person datatype

  constructor() {
    this.myProfile = new Person("Seth Kerrey", "Calamari", "Teal"); // instantiate new Person obj
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
