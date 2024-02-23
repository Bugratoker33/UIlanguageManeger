import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';
import { CartItem } from '../models/CartItem';
import { CartItems } from '../models/CartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  addToCart(teacher:Teacher){
    let item = CartItems.find(c=>c.teacher.id===teacher.id);
    if(item){
      item.quantity+=1;
      console.log(teacher.name)
      
    }else{
      let cartItem= new CartItem();
      cartItem.teacher=teacher;
      cartItem.quantity=1;
    CartItems.push(cartItem);
    }
  }
   removeFromCart(teacher:Teacher){
    let item:CartItem = CartItems.find(c=>c.teacher.id===teacher.id);
    CartItems.splice(CartItems.indexOf(item),1)
   }

  list():CartItem[]{
    return CartItems;
  }
}
