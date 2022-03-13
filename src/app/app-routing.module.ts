import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:ProductComponent},
  {path:"products",pathMatch:"full", component:ProductComponent},
  {path:"products/category/:categoryId",pathMatch:"full", component:ProductComponent},
  {path:"products/add",pathMatch:"full", component:ProductAddComponent},
  {path:"login",pathMatch:"full", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
