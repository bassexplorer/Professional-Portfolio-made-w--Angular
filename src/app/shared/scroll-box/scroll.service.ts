import { ElementRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class ScrollService {

	public scrollToDiv = new Subject<ElementRef>();

	constructor() { }

}
