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

import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']; // craft header
  book: IBook | undefined;

  constructor(private bookService: BooksService) {
    this.books = this.bookService.getBooks(); // getBooks mapped to array of IBook
   }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) { // return book by isbn
    this.book = this.bookService.getBook(isbn);
    console.log(this.book); // test if books are selected on click
  }

}
