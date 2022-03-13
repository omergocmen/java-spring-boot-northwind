import { Injectable } from '@angular/core';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';
import { CartItem } from "../models/cartItem";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.id===product.id);
    if(item){
      item.quantity+=1;
    }else{
      let cartItem={product:product,quantity:1};
      CartItems.push(cartItem);
    }
  }

  removeFromCart(product:Product){
    let item:CartItem = CartItems.find(c=>c.product.id===product.id);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }
}
