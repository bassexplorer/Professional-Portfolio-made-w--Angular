import { Clipboard } from '@angular/cdk/clipboard';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class CopyService{

	public _isCopied = false;
	public copiedSubject = new Subject<boolean>();

	constructor(private clipboard: Clipboard) { }

	public copyEmail(text: string) {
		this.copiedSubject.next(this._isCopied = true);
		this.clipboard.copy(text);

		setTimeout(() => {
			this.copiedSubject.next(this._isCopied = false);

		}, 1000);

	}
}
