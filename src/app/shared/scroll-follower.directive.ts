import { ContentChild, Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

import { ScrollService } from './scroll-box/scroll.service';

@Directive({
	selector: '[ScrollFollow]'

})
export class ScrollFollowerDirective implements OnInit, OnDestroy {

	@Input() public offsetFromTop = window.innerHeight * 0.65; // number of pixels of the widget should be from top of the window
	@Input() public divElement: ElementRef;
	@ContentChild('scrollTxt') public textBox: ElementRef;
	public divSub$: Subscription;


	constructor(private element: ElementRef, private renderer: Renderer2, private scrollService: ScrollService) {
		this.renderer.setStyle(this.element.nativeElement, 'top', this.offsetFromTop + 'px');
		this.renderer.setStyle(this.element.nativeElement, 'transition', 'top .3s ease-in-out');
	}

	public ngOnInit(): void {
		this.divSub$ = this.scrollService.scrollToDiv.subscribe(((div) => {
			this.divElement = div;
		}));
		}


	@HostListener('window:scroll', ['$event']) public scrollFollow(event) {
		const currentPosition = event.path[1].pageYOffset;

		if (currentPosition > (this.offsetFromTop / 4)) {
			this.renderer.setStyle(this.element.nativeElement, 'top', (this.offsetFromTop + currentPosition) + 'px');
		}
		this.setupArrowTitle();

	}

	@HostListener('click') public scrollToSection() {
		if (window.scrollY > 100) {
			window.document.documentElement.scrollTop = 0;
			this.setupArrowTitle();
		} else {
			this.setupArrowTitle();
			this.divElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}


	public setupArrowTitle() {
		if (window.scrollY > 100) {
			this.renderer.setProperty(this.textBox.nativeElement, 'innerText', 'Back To Top');
			this.renderer.addClass(this.textBox.nativeElement, 'up-arrow');
			this.renderer.removeClass(this.textBox.nativeElement, 'down-arrow');
		} else {
			this.renderer.setProperty(this.textBox.nativeElement, 'innerText', 'Scroll Down');
			this.renderer.addClass(this.textBox.nativeElement, 'down-arrow');
			this.renderer.removeClass(this.textBox.nativeElement, 'up-arrow');
		}
	}

	public ngOnDestroy(): void {
		this.divSub$.unsubscribe();
	}


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
