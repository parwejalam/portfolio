import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor() {}
  // Acess key for parwejalamgt@gmail.com
  form_access_key = "88afd5ae-46af-47ee-9826-851b902c7ad6"

  sendEmail(formData: FormData): Promise<Response> {
    return fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
  }
}