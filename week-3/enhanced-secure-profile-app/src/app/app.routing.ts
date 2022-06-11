/**
============================================
; Title: Exercise 3.3 - Passing Data to Routes, Part 2
; File Name: app.routing.ts
; Author: Professor Krasso
; Date: 12 June 2022
; Modified By: Seth Kerrey
; Description:
;   App routing secure-profile-app
; Resources:
;   buwebdev, Professor Krasso, Bellevue University
===========================================
*/

import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
