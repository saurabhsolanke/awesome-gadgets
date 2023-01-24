import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';


const routes: Routes = [
  {path: '',component: ProductComponent},
  {path: 'product',component: ProductComponent},
  {path: 'cart',component: CartComponent},
  {path: 'smartphone',component: SmartphoneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
