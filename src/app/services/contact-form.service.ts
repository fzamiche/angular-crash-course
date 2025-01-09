import {Injectable} from '@angular/core';

// @Injectable() est un décorateur qui permet d'injecter un service dans un autre service ou un composant.
@Injectable({
  providedIn: 'root' // permet de déclarer le service dans le tableau des providers du module racine
})
export class ContactFormService {

  messageDetails: Array<any> = [];

  constructor() {
    this.init()
  }

  init(): void{
    this.insertMessage({name: 'Jean', email: 'exemple@gmail.com', message: 'Bonjour, je suis Jean'});
    this.insertMessage({name: 'Paul', email: 'paul@gmail.com' , message: 'Bonjour, je suis Paul'});
    this.insertMessage({name: 'Marie', email: 'marie@gmail.com', message: 'Bonjour, je suis Marie'});
  }

  insertMessage(message: { name: string, email: string, message: string}): void{
    this.messageDetails.push(message);
  }

  getAllMessages() {
    return this.messageDetails;
  }

  deleteMessage(index: number) {
    this.messageDetails.splice(index, 1);
  }
}
