/**
============================================
; Title: Exercise 8.2 - Server-Side Communications
; Author: Professor Krasso
; Date: 17 July 2022
; Modified By: Seth Kerrey
; Description: how to communicate with a middleware API
; Code Attribution: Additional code from WEB 425 Week 8 exercises and videos
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

  books: Array<IBook> = [];
  book: IBook;

  constructor(private bookService: BooksService, private dialog: MatDialog) {
    this.bookService.getBooks().subscribe(res => { // get books properties
      console.log(res);
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            })
          }

          this.books.push({ // push new object into books array
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    });
   }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) { // return book details by isbn
    this.book = this.books.find(book => book.isbn === isbn);

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
