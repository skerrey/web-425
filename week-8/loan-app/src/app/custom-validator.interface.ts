/**
============================================
; Title: Assignment 8.3 - Capstone (Loan App)
; Author: Professor Krasso
; Date: 17 July 2022
; Modified By: Seth Kerrey
; Description: Loan App
; Code Attribution: https://stackoverflow.com/questions/45057907/input-type-number-only-numeric-value-validation
===========================================
*/

import { AbstractControl } from "@angular/forms";
export class CustomValidator{
  // Number only validation
  static numeric(control: AbstractControl) { // input to only accept numeric | code from StackOverflow
    let val = control.value;

    if (val === null || val === '') return null;

    if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { 'invalidNumber': true };

    return null;
  }
}
