import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsService } from './products.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartDetailsComponent } from './cart-details/cart-details.component';

const routes: Routes = [
  { path: '', component: ProductsComponent }, // Default route to the ProductsComponent
  { path: 'viewCart', component: CartDetailsComponent}
];

@NgModule({
  declarations: [ProductsComponent, CartDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
