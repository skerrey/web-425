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
  selector: 'app-interest-paid',
  templateUrl: './interest-paid.component.html',
  styleUrls: ['./interest-paid.component.scss']
})
export class InterestPaidComponent implements OnInit {

  @Input() interestPaid: number;

  constructor() { }

  ngOnInit(): void {
  }

}
