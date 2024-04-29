import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  cartItems:{}[];
  deliveryAddress:string;
  billAmount:number;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    const cartItemsString = localStorage.getItem('cartItems');
    this.cartItems= cartItemsString ? JSON.parse(cartItemsString) : [];
    this.billAmount=this.cartItems.reduce((acc,item)=>acc+item['totalPrice'],0);
  }
  submitAddress():void{

  }

}
