/**
============================================
; Title: Assignment 5.3 - Data Tables
; Author: Professor Krasso
; Date: 26 June 2022
; Modified By: Seth Kerrey
; Description: how to implement navigation using Angular Material
; Code Attribution: Additional code from WEB 425 Week 5 exercises and videos
;===========================================
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [ // instantiate books array
      {
        isbn: '0446574724',
        title: 'Private',
        description: `The first book in the Private series.`,
        numOfPages: 400,
        authors: ['James Patterson', 'Maxine Paetro']
      },
      {
        isbn: '0446617792',
        title: 'The Angel Experiment',
        description: `The first book in the Maximum Ride series.`,
        numOfPages: 464,
        authors: ['James Patterson']
      },
      {
        isbn: '0446364193',
        title: 'Along Came A Spider',
        description: `The first book in the Alex Cross series.`,
        numOfPages: 528,
        authors: ['James Patterson']
      },
      {
        isbn: ' 9780446601245',
        title: 'Kiss the Girls',
        description: `The second book in the Alex Cross series.`,
        numOfPages: 496,
        authors: ['James Patterson']
      },
      {
        isbn: '0446604801',
        title: 'Jack & Jill',
        description: `The third book in the Alex Cross Series`,
        numOfPages: 480,
        authors: ['James Patterson']
      },
    ]
  }

  getBooks(): Observable<IBook[]> {  // return entire array of books
    return of(this.books);
  }

  getBook(isbn: string): IBook {  // returns book by ISBN
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }

}
