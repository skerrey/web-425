/**
============================================
; Title: Assignment 8.3 - Capstone (Loan App)
; Author: Professor Krasso
; Date: 17 July 2022
; Modified By: Seth Kerrey
; Description: Loan App
; Code Attribution: Additional code from WEB 425 Week 8 exercises and videos
===========================================
*/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILoan } from '../loan.interface';
import { CustomValidator } from '../custom-validator.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loanForm: FormGroup;

  loanAmount: any;
  interestRate: any;
  numOfYears: any;

  monthlyPayment: number = 0;
  interestPaid: number = 0;

  loanEntries: Array<ILoan> = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      loanAmount: ['', Validators.required],
      interestRate: ['', Validators.required ],
      numOfYears: ['', Validators.required ]
    })

    console.log(this.loanForm);
  }

  onSubmit() {
    this.loanEntries.push({
      loanAmount: this.loanAmount,
      interestRate: this.interestRate,
      numOfYears: this.numOfYears
    })

    console.log(this.loanEntries);
  }

  calculateResults() {
    this.monthlyPayment = this.loanAmount * (this.interestRate * Math.pow((this.interestRate + 1), this.numOfYears)) / (Math.pow((1 + this.interestRate), this.numOfYears) - 1);
    this.interestPaid = this.interestRate / (this.numOfYears / 12);

  }

  clearEntries() {
    this.loanEntries = [];
    this.monthlyPayment = 0;
    this.interestPaid = 0;
  }

  get form() {
    return this.loanForm.controls;
  }
}
