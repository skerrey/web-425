/**
============================================
; Title: Assignment 7.2 - Reactive Forms
; Author: Professor Krasso
; Date: 10 July 2022
; Modified By: Seth Kerrey
; Description: learning how to create reactive forms in Angular
; Code Attribution: Additional code from WEB 425 Week 7 exercises and videos
===========================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) { // validates student ID to studentIds array
    return this.studentIds.some(id => id === studentId);
  }
}
