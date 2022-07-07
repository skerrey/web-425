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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }

  ngOnInit(): void { // build sign in form
    this.signinForm = this.fb.group({
      studentId: ''
    })
  }

  onSubmit() { // submit new studentId value || adding a cookie to the user's browser || includes validation of new studentId value
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/'])
    } else {
      this.errorMessage = 'The student ID you entered is invalid, please try again.';
    }
  }
}
