import {Component} from '@angular/core';

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
  formsLines: Array<any> = [];

  onSubmit() {
    this.isSubmitted = true;
    this.formsLines.push({
      'name': this.name,
      'email': this.email,
      'message': this.message,
    });
  }
}
