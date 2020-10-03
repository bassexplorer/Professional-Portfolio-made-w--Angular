import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
	providedIn: 'root'
})
export class ContactService {

	private api = 'https://mailthis.to/markbencekiss@gmail.com';
	constructor(private http: HttpClient) { }

	public PostMessage(input: any) {
		return this.http.post(this.api, input, { responseType: 'text' }).pipe(

			map(
				(response) => {
					if (response) {
						return response;
					}
				},
				(error: any) => {
					return error;
				}
			)

		)
	}

}
