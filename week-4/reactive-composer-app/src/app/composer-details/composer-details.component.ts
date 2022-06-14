/**
============================================
; Title: Exercise 4.2 - Inversion of Control and Dependency Injection
; File Name: composer-details.component.ts
; Author: Professor Krasso
; Date: 19 June 2022
; Modified By: Seth Kerrey
; Description:
;   composer-details component TypeScript for app
; Resources:
;   buwebdev, Professor Krasso, Bellevue University
===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId')!, 10);

    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId)!;
    }
  }

  ngOnInit(): void {
  }

}
