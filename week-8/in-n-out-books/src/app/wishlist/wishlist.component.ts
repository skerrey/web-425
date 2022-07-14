/**
============================================
; Title: Exercise 6.2 - Output Properties
; Author: Professor Krasso
; Date: 3 July 2022
; Modified By: Seth Kerrey
; Description: how to implement Output Properties
; Code Attribution: Additional code from WEB 425 Week 6 exercises and videos
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = []; // form field array

  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem) { // updates wishlist with added items from form field array
    this.items.push(item);
  }

}
