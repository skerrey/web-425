/**
============================================
; Title: Assignment 5.4 - Dialogs
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
import { MatDialog } from '@angular/material/dialog'
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']; // craft header
  book: IBook;

  constructor(private bookService: BooksService, private dialog: MatDialog) {
    this.books = this.bookService.getBooks(); // getBooks mapped to array of IBook
   }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) { // return book details by isbn
    this.book = this.bookService.getBook(isbn);

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, { // assign to dialog.open
      data: { book: this.book },
      disableClose: true,
      width: '800px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });

    console.log(this.book); // test if books are selected on click
  }

}
