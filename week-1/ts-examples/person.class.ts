/**
============================================
; Title: Exercise 1.4 - TypeScript
; File Name: person.class.ts
; Author: Professor Krasso
; Date: 29 May 2022
; Modified By: Seth Kerrey
; Description:
;   Person class
; Resources:
;   buwebdev, Professor Krasso, Bellevue University
===========================================
*/

import { IPerson } from "./person.interface";

class Person implements IPerson {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let myName = new Person("Seth", "Kerrey");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);