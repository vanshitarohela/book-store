import { Component, EventEmitter, Input, Output } from '@angular/core';
interface Removebook {
  ISBN: number;
  quantity: number;
}
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
  selector: 'app-cart-book',
  templateUrl: './cart-book.component.html',
  styleUrls: ['./cart-book.component.css'],
})
export class CartBookComponent {
  @Input() book: Book | undefined;
  @Output() removeFromCart: EventEmitter<Removebook> = new EventEmitter();
  @Output() increaseQuantityByOne: EventEmitter<number> = new EventEmitter();
  @Output() decreaseQuantityByOne: EventEmitter<number> = new EventEmitter();
  quantity: number = 1;
  increaseQuantity(ISBN: number) {
    this.quantity += 1;
    this.increaseQuantityByOne.emit(ISBN);
  }
  decreaseQuantity(ISBN: number) {
    if (this.quantity > 1) {
      this.quantity -= 1;
      this.decreaseQuantityByOne.emit(ISBN);
    }
  }
  removeProduct(ISBN: number) {
    let quantity = this.quantity;
    let ISBNquantity = { ISBN, quantity };
    this.removeFromCart.emit(ISBNquantity);
  }
}
