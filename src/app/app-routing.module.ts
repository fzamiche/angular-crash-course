import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {AboutComponent} from "./about/about.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {
    path: "home",
    component: ContactFormComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "about/:pathVariable",
    component: AboutComponent
  },
  {
    path: "products",
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
