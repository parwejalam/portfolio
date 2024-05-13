import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor() {}
  form_access_key = "705d2e0e-488d-4a47-b6d6-f3c9196f35ee"

  sendEmail(formData: FormData): Promise<Response> {
    return fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
  }
}