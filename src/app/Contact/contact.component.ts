import { Component } from "@angular/core";
import { MailService } from "../services/mail.service";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    constructor( private mailService: MailService) { }
    private color: string = '';
    showAlert: boolean = false;
    alertMessage: string = '';
    onSubmit: boolean = false;
    // iconLoad = faArrowRotateForward;
    contactFormValues = {
      name: '',
      email: '',
      body: '',
    };

    get alertColor() {
        return `text-${this.color}-400`;
      }
      
      hideAlert() {
        setTimeout(() => {
          this.showAlert = false;
        }, 5000);
      }
      
      async submitEmail(contactForm: NgForm) {
        this.onSubmit = true;
        // -- set formData values
        let formData: FormData = new FormData();
        formData.append('name', this.contactFormValues.name);
        formData.append('email', this.contactFormValues.email);
        formData.append('body', this.contactFormValues.body);
        // -- email customization
        formData.append('access_key', this.mailService.form_access_key);
        formData.append('subject', 'Email Support From Your Site');
        formData.append('from_name', 'Contact Notification');
      
        try {
          // -- send email
          const res = await this.mailService.sendEmail(formData);
          if (!res.ok) {
            throw new Error();
          }
          this.alertMessage = 'Email sent successfully!';
          this.color = 'green';
          contactForm.reset();
        } catch (err) {
          // handle error
          this.alertMessage = 'Something went wrong, try again later!';
          this.color = 'red';
        }
        // -- reset submit and hide alert
        this.onSubmit = false;
        this.showAlert = true;
        this.hideAlert();
      }

      // List for Social Icon
      socialIcons =[
        {
          name: 'facebook',
          link: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          icon: 'bootstrapFacebook'
        },
        {
          name: 'Instagram',
          link: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          icon: ''
        },
        {
          name: 'Linkdin',
          link: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          icon: ''
        },
        {
          name: 'github',
          link: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          icon: ''
        },
        {
          name: 'twitter',
          link: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          icon: ''
        },
      ]
}