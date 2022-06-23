/**
============================================
; Title: Assignment 5.2 - Navigation and Layout
; Author: Professor Krasso
; Date: 21 June 2022
; Modified By: Seth Kerrey
; Description: how to implement navigation using Angular Material
; Code Attribution: Additional code from WEB 425 Week 5 exercises and videos
;===========================================
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
