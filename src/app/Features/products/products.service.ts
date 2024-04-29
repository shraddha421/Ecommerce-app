import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
 
  public cartItems:{
    product: {
      id: number;
      title: string;
      description: string;
      price: number;
      category: string;
      brand: string;
      thumbnail: string;
      images: string[];
      quantity: number;
    };
    totalPrice:number;
  }[];
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>('https://dummyjson.com/products');
  }
}
