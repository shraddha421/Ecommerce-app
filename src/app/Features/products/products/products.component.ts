import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  thumbnail: string;
  images: string[];
  quantity:number;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  //Prodcts will have properties - id, title,description, price, category, brand, thumbnail, images:[]
  filteredProducts: Product[] = [];
  products: Product[] = [];
  cartItems: Product[]= [];
  sortOption: string = '';
  filterTitle: string='';
  filterDescription: string='';
  filterCategory: string='';
  filterBrand: string='';
  selectedProductsCount:number=0;
  constructor(private productsService: ProductsService,private router:Router) {}

  ngOnInit(): void {
    //use products service to get the products
    this.productsService.getAllProducts().subscribe((res) => {
      this.filteredProducts = res['products'];
      this.products = res['products'];
      //Assign 0 as defalt vale to each prodct's qantity
      this.products.forEach(product => {
        product.quantity = 0;
      })
      this.filteredProducts.forEach(product => {
        product.quantity = 0;
      })
    });
  }
  sortProducts(): void {
    //Return early if there are no products to sort in filteredProducts 
    if (this.filteredProducts.length === 0) return;

    this.filteredProducts.sort((a, b) => {
      if (this.sortOption === 'name') {
        // Sort by name (alphabetical order)
        return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
      }
  
    // Direct comparison for numerical properties
    return a[this.sortOption] - b[this.sortOption];
  });
  }
  filterProducts(): void {
    this.filteredProducts = this.products.filter(
      (product) =>
        product.title.toLowerCase().includes(this.filterTitle?.toLowerCase()) &&
        product.description
          .toLowerCase()
          .includes(this.filterDescription?.toLowerCase()) &&
        product.category
          .toLowerCase()
          .includes(this.filterCategory?.toLowerCase()) &&
        product.brand.toLowerCase().includes(this.filterBrand?.toLowerCase())
    );
  }
  addToCart(product): void {
    product.quantity++;
    product.totalPrice = product.price * product.quantity;
    this.updateSelectedProductsCount();
    //if product doesn't exist then add it to the cartItems array 
    if (!this.cartItems.find((item) => item.id === product.id)) {
    this.cartItems.push(product);
    }
  }
  updateSelectedProductsCount(): void {
    let totalCount = 0;
    this.filteredProducts.forEach(product => {
      totalCount += product.quantity || 0; // Add the quantity of each product to the total count
    });
    this.selectedProductsCount = totalCount;  
  }
  viewCart():void{
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      this.router.navigate(['/viewCart']);      
  }
}
