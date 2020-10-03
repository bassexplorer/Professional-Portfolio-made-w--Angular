import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { showSocials } from '../animations';

@Component({
	selector: 'app-scroll-box',
	templateUrl: './scroll-box.component.html',
	styleUrls: ['./scroll-box.component.scss'],
	animations: [showSocials]

})
export class ScrollBoxComponent implements OnInit {
	@Input() public scrollBoxON = true;
	@Input() public section2: ElementRef;
	@ViewChild('scrollTxt') public scrollTxtRef: ElementRef;
	private onAboutMe = true;

	constructor(private renderer: Renderer2,private route: Router) { }

	public ngOnInit(): void { }



	@HostListener('window:wheel', ['$event']) public onScroll(event: MouseEvent) {

		// if (pageYOffset > 100) {
		// 	this.renderer.setProperty(this.scrollTxtRef.nativeElement, 'innerText', 'Back To Top');
		// 	this.renderer.addClass(this.scrollTxtRef.nativeElement, 'up-arrow');
		// 	this.renderer.removeClass(this.scrollTxtRef.nativeElement, 'down-arrow');

		// } else {
		// 	this.renderer.setProperty(this.scrollTxtRef.nativeElement, 'innerText', 'Scroll Down');
		// 	this.renderer.addClass(this.scrollTxtRef.nativeElement, 'down-arrow');
		// 	this.renderer.removeClass(this.scrollTxtRef.nativeElement, 'up-arrow');
		// }

		// console.log(this.route.routerState);

		if ((event as WheelEvent).deltaY < 0 && this.onAboutMe) {
			this.renderer.setProperty(this.scrollTxtRef.nativeElement, 'innerText', 'Back To Top');
			this.renderer.addClass(this.scrollTxtRef.nativeElement, 'up-arrow');
			this.renderer.removeClass(this.scrollTxtRef.nativeElement, 'down-arrow');
			this.onAboutMe = false;

		}
		if ((event as WheelEvent).deltaY > 0 && !this.onAboutMe) {
			this.renderer.setProperty(this.scrollTxtRef.nativeElement, 'innerText', 'Scroll Down');
			this.renderer.addClass(this.scrollTxtRef.nativeElement, 'down-arrow');
			this.renderer.removeClass(this.scrollTxtRef.nativeElement, 'up-arrow');
			this.onAboutMe = true;

		}


	}

}
