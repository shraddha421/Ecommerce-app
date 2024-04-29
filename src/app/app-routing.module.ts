import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';


const routes: Routes = [
//Rotes for login, registration form and products page when path matched exactly, else route to login page  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationFormComponent},
  { path: 'products', loadChildren: () => import('./Features/products/products.module').then(m => m.ProductsModule) },
  {path: '', redirectTo: '/login', pathMatch: 'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
