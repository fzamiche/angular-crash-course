import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {FormsModule} from "@angular/forms";
import { MessageDetailsComponent } from './message-details/message-details.component';
import {ContactFormService} from "./services/contact-form.service";
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { FakeApiComponent } from './fake-api/fake-api.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    MessageDetailsComponent,
    MenuComponent,
    AboutComponent,
    FakeApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ // les services utilisés dans l'app doivent être déclarés ici
    ContactFormService,
    HttpClient],
  bootstrap: [AppComponent] // le premier composant à exécuter au lancement de l'app
})
export class AppModule { }
