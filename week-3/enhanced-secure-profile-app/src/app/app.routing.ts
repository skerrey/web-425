/**
============================================
; Title: Assignment 3.4 - Guarding Routes
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
import { SignInGuard } from "./sign-in.guard";

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    canActivate: [SignInGuard], // route guard for sign in
    component: HomeComponent
  }
]
