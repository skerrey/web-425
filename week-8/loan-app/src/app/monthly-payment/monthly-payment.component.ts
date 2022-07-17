/**
============================================
; Title: Assignment 8.3 - Capstone (Loan App)
; Author: Professor Krasso
; Date: 17 July 2022
; Modified By: Seth Kerrey
; Description: Loan App
; Code Attribution: Additional code from WEB 425 Week 8 exercises and videos
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.scss']
})
export class MonthlyPaymentComponent implements OnInit {

  @Input() monthlyPayment: number;

  constructor() { }

  ngOnInit(): void {
  }

}
