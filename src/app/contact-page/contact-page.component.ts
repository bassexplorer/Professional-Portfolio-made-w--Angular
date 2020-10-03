import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ContactService } from './contact.service';






@Component({
	selector: 'app-contact-page',
	templateUrl: './contact-page.component.html',
	styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

	public contactForm: FormGroup;

	constructor(private contact: ContactService) { }



	public ngOnInit(): void {
		this.contactForm = new FormGroup({
			fullName: new FormControl('', [Validators.required]),
			email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
			subject: new FormControl('', [Validators.required]),
			message: new FormControl('', [Validators.required])
		});
	}



	public onSubmit() {
		this.contact.PostMessage(FormData)
			.subscribe((response) => {
				location.href = 'https://mailthis.to/confirm'
			}, error => {
				console.warn(error.responseText);
			});
	}

}
