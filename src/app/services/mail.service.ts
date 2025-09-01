import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor() { }
  // Acess key for parwejalamgt@gmail.com
  form_access_key = "7e50776c-9aee-484b-bccc-72552681cfbc"

  sendEmail(formData: FormData): Promise<Response> {
    return fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
  }
}