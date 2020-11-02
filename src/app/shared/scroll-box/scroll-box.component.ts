import { Component, ElementRef, Input, OnInit } from '@angular/core';

import { showSocials } from '../animations';


@Component({
	selector: 'app-scroll-box',
	templateUrl: './scroll-box.component.html',
	styleUrls: ['./scroll-box.component.scss'],
	animations: [showSocials]

})
export class ScrollBoxComponent implements OnInit {
	@Input() public scrollBoxON = true;
	public section2: ElementRef;

	constructor() { }

	public ngOnInit(): void {

	}





}
