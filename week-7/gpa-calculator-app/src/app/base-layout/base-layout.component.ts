/**
============================================
; Title: Assignment 7.3 - Form Validation
; Author: Professor Krasso
; Date: 10 July 2022
; Modified By: Seth Kerrey
; Description: learning how to apply data validation to forms in Angular
; Code Attribution: Additional code from WEB 425 Week 7 exercises and videos
===========================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = "GPA Calculator"
  }

  ngOnInit(): void {
  }
  signOut() { // deletes cookies within browser
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
