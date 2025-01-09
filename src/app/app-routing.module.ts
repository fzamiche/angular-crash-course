import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {AboutComponent} from "./about/about.component";
import {FakeApiComponent} from "./fake-api/fake-api.component";

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
    path: "fake-api",
    component: FakeApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
