import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CartService } from '../../service/cart.service';
import { CartItem } from '../../models/CartItem';
import { Teacher } from '../../models/teacher';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [NgFor , NgIf],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[] =[];
  constructor( private cartService:CartService , private ToasterService:ToastrService){
    
  }
  ngOnInit(): void {
    this.getCard();
  }
  getCard(){
    this.cartItems=this.cartService.list();
  }
    removeFromCart(teacher:Teacher){
      let item: CartItem = this.cartItems.find(c => c.teacher.id === teacher.id);
      if (item) {
          if (item.quantity > 1) {
              item.quantity -= 1;
          } else {
            this.cartItems.splice(this.cartItems.indexOf(item), 1);
          }
          this.ToasterService.error(teacher.languageName + " removed from cart");
      }
    }
}
