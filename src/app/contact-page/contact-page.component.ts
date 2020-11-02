import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ContactService } from './contact.service';






@Component({
	selector: 'app-contact-page',
	templateUrl: './contact-page.component.html',
	styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

	public contactForm: FormGroup;
	public onConfirmation: boolean;

	constructor(private contact: ContactService, private builder: FormBuilder) { }



	public ngOnInit(): void {
		this.contactForm = this.builder.group({
			fullName: new FormControl('', [Validators.required]),
			email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
			subject: new FormControl('', [Validators.required]),
			message: new FormControl('', [Validators.required])
		});

		this.onConfirmation = false;
	}



	public onSubmit(formData) {
		// this.contact.PostMessage(JSON.stringify(this.contactForm.value))
		this.contact.PostMessage(formData)
			.subscribe((response) => {
				this.onConfirmation = true;
				location.href = 'https://mailthis.to/confirm';
			}, (error) => {
				console.warn(error.responseText);
			});
	}

}
