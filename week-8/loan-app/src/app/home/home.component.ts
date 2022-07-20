/**
============================================
; Title: Assignment 9.2 - Capstone (Loan App)
; Author: Professor Krasso
; Date: 24 July 2022
; Modified By: Seth Kerrey
; Description: Loan App Delivery
; Code Attribution: Additional code from WEB 425 exercises and videos
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from '../custom-validator.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loanForm: FormGroup;

  monthlyPayment: number = 0;
  interestPaid: number = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { // adds validators to form: required & numeric
    this.loanForm = this.fb.group({
      loanAmount: ['', Validators.compose([Validators.required, CustomValidator.numeric])],
      interestRate: ['', Validators.compose([Validators.required, CustomValidator.numeric])],
      numOfYears: ['', Validators.compose([Validators.required, CustomValidator.numeric])]
    })

    console.log(this.loanForm); // testing values are captured
  }

  onSubmit() { // binds form to variables & loan calculation
    const formValues = this.loanForm.value;
    const loanAmount = parseFloat(formValues.loanAmount);
    const interestRate = parseFloat(formValues.interestRate);
    const numOfYears = parseFloat(formValues.numOfYears);

    const numOfMonths = (numOfYears * 12);
    const ratePerPeriod = ((interestRate / 100) / 12);

    if (!NaN) {
      this.monthlyPayment = (loanAmount * (ratePerPeriod * Math.pow((ratePerPeriod + 1), numOfMonths))) / (Math.pow((1 + ratePerPeriod), numOfMonths) - 1);
      this.interestPaid = (this.monthlyPayment * numOfMonths) - loanAmount;
    }

  }

  clearEntries() { // clears results
    this.monthlyPayment = 0;
    this.interestPaid = 0;
    this.loanForm.reset();
  }

  get form() {
    return this.loanForm.controls;
  }
}
