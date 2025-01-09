import {Component} from '@angular/core';
import {ContactFormService} from "../services/contact-form.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messageDetails: Array<any> = [];

  constructor(
    private contactFormService: ContactFormService
  ) {
    this.messageDetails = this.contactFormService.getAllMessages();
    this.isSubmitted = this.messageDetails.length > 0;
  }

  onSubmit() {
    this.isSubmitted = true;
    this.contactFormService.insertMessage({
      'name': this.name,
      'email': this.email,
      'message': this.message,
    });
  }

  deleteMessage(index: number) {
    this.contactFormService.deleteMessage(index); // supprime l'élément à l'index donné
  }
}
