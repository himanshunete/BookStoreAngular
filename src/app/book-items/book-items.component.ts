import { Component, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/Book';
import { EventEmitter } from '@angular/core';
import { typeSourceSpan } from '@angular/compiler';

@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css']
})
export class BookItemsComponent implements OnInit {

  changeCss = true;
  show = true;
@Input() book!: Book;
@Output() bookAdd :EventEmitter<Book> = new EventEmitter;
  constructor() {
   
   }

  ngOnInit(): void {
  }

  AddToBag(book: Book){
this.changeCss = ! this.changeCss;
this.show = !this.show;
console.log(book);
this.bookAdd.emit(book);
  }
}
