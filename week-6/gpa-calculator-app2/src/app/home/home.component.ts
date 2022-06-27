/**
============================================
; Title: Assignment 6.4 - Input Properties
; Author: Professor Krasso
; Date: 3 July 2022
; Modified By: Seth Kerrey
; Description: learning how to create input properties in Angular
; Code Attribution: Additional code from WEB 425 Week 6 exercises and videos
===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transcriptEntry: ITranscript;

  selectableGrades: Array<string> = [
    'A',
    'A',
    'B+',
    'B',
    'B-',
    'C+',
    'C',
    'C-',
    'D+',
    'D',
    'D-',
    'F'
  ];

  gpaTotal: number = 0;

  transcriptEntries: Array<ITranscript> = [];

  constructor() {
    this.transcriptEntry = {} as ITranscript;
   }

  ngOnInit(): void {
  }

  saveEntry() { // saves the selection of transcript grade value

    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;

  }

  calculateResults() { // calculates GPA from input
    let gpa: number = 0;

    for (let entry of this.transcriptEntries) { // assign grade string to number values
      switch(entry.grade){
        case 'A': gpa+=4.0;
        break;
        case 'A-': gpa+=3.7;
        break;
        case 'B+': gpa+=3.3;
        break;
        case 'B': gpa+=3.0;
        break;
        case 'B-': gpa+=2.7;
        break;
        case 'C+': gpa+=2.3;
        break;
        case 'C': gpa+=2.0;
        break;
        case 'C-': gpa+=1.7;
        break;
        case 'D+': gpa+=1.3;
        break;
        case 'D': gpa+=1.0;
        break;
        case 'D-': gpa+=0.7;
        break;
        case 'F': gpa+=0.0;
        break;
      }
    }
    this.gpaTotal = gpa / this.transcriptEntries.length; // divide total GPA against transcript
  }

  clearEntries() { // clears gpaTotal
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
