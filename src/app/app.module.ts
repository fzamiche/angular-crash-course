import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {FormsModule} from "@angular/forms";
import { MessageDetailsComponent } from './message-details/message-details.component';
import {ContactFormService} from "./services/contact-form.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    MessageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContactFormService], // les services utilisés dans l'app doivent être déclarés ici
  bootstrap: [AppComponent] // le premier composant à exécuter au lancement de l'app
})
export class AppModule { }
