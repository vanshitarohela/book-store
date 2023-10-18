import { Component, Input, Output, EventEmitter } from '@angular/core';
interface Book {
  ISBN: number;
  title: string;
  author: string;
  summary: string;
  image: string;
  price: {
    currency: string;
    value: number;
    displayValue: string;
  };
}
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: Book | undefined;
  @Output() addProduct: EventEmitter<Book> = new EventEmitter();

  addToCart(book: Book) {
    this.addProduct.emit(book);
  }
}
