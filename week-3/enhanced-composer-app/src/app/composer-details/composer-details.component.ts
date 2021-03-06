/**
============================================
; Title: Exercise 3.2 - Passing Data to Routes, Part 1
; File Name: composer-details.component.ts
; Author: Professor Krasso
; Date: 12 June 2022
; Modified By: Seth Kerrey
; Description:
;   composer-details component TypeScript for enhanced-composer-app
; Resources:
;   buwebdev, Professor Krasso, Bellevue University
===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId')!, 10);

    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId)!;
    }
  }

  ngOnInit(): void {
  }

}
