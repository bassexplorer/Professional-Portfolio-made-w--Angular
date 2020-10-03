import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appDarkModeSwitch]'
})
export class DarkModeSwitchDirective {

	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

	public isActive = false;

	@HostListener('click') public onClick() {

		this.isActive = !this.isActive;
		if (this.isActive) {
			this.renderer.addClass(this.elementRef.nativeElement.closest('body'), 'dark-theme');
			this.renderer.removeClass(this.elementRef.nativeElement.closest('body'), 'light-theme');

		} else {
			this.renderer.removeClass(this.elementRef.nativeElement.closest('body'), 'dark-theme');
			this.renderer.addClass(this.elementRef.nativeElement.closest('body'), 'light-theme');
		}

	}
}
