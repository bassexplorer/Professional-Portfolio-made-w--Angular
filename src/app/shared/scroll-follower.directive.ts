import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
	selector: '[ScrollFollow]'

})
export class ScrollFollowerDirective implements OnInit {

	@Input() public offsetFromTop = window.innerHeight * 0.65; // number of pixels of the widget should be from top of the window
	@Input() public divElement: HTMLElement;
	public canScroll = false;

	constructor(private element: ElementRef, private renderer: Renderer2) {
		this.renderer.setStyle(this.element.nativeElement, 'top', this.offsetFromTop + 'px');
		this.renderer.setStyle(this.element.nativeElement, 'transition', 'top .3s ease-in-out');
	}

	public ngOnInit(): void { }

	@HostListener('window:scroll', ['$event']) public scrollFollow(event) {
		const currentPosition = event.path[1].pageYOffset;
		this.renderer.setStyle(this.element.nativeElement, 'top', (this.offsetFromTop + currentPosition) + 'px');


		if (currentPosition > (this.offsetFromTop / 4)) {
			this.canScroll = true;
		} else {
			this.canScroll = false;
		}

	}

	// @HostListener('click') public scrollToSection() {

	// 	if (this.canScroll) {
	// 		window.document.documentElement.scrollTop = 0;

	// 	} else {
	// 		this.divElement.scrollIntoView(false);
	// 	}
	// }


}


// if (this.elementRef) {
// 	if (currentPosition > (this.offsetFromTop / 4)) {
// 		this.renderer.setProperty(this.elementRef, 'innerText', 'Back To Top');
// 		this.renderer.addClass(this.elementRef, 'up-arrow');
// 		this.renderer.removeClass(this.elementRef, 'down-arrow');
// 		this.renderer.

// 	} else {
// 		this.renderer.setProperty(this.elementRef, 'innerText', 'Scroll Down');
// 		this.renderer.addClass(this.elementRef, 'down-arrow');
// 		this.renderer.removeClass(this.elementRef, 'up-arrow');
// 		this.scrollTo.scrollIntoView(false);
// 	}
// }
