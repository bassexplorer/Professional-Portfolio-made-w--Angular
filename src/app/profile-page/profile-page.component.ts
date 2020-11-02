import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { routerTransition } from '../shared/router.animations';


@Component({
	selector: 'app-profile-page',
	templateUrl: './profile-page.component.html',
	styleUrls: ['./profile-page.component.scss'],
	animations: [routerTransition]
})
export class ProfilePageComponent implements OnInit, OnDestroy {

	public listener;
	public touchStartListener;
	public touchMovedListener;
	public startEvent: TouchEvent;

	public onAboutMe = true;

	constructor(
		private renderer: Renderer2,
		private router: Router
	) {

		this.listener = this.renderer.listen('window', 'wheel', (e) => {

			// console.log(e);

			if (e.wheelDelta < 0 && this.onAboutMe) {
				this.router.navigate(['profile/skills']);
				this.onAboutMe = false;
			}
			if (e.wheelDelta > 0 && !this.onAboutMe) {
				this.router.navigate(['/profile']);
				this.onAboutMe = true;
			}
		});

		// this.touchStartListener = this.renderer.listen('window', 'touchstart', (e: TouchEvent) => {
		// 	this.startEvent = e;
		// 	console.log(this.startEvent);
		// });

		// this.touchMovedListener = this.renderer.listen('window', 'touchmove', (e: TouchEvent) => {

		// 	if ((e.changedTouches[0].clientY < this.startEvent.changedTouches[0].clientY) && this.onAboutMe) {
		// 		this.router.navigate(['profile/skills']);
		// 		this.onAboutMe = false;
		// 	}
		// 	if ((e.changedTouches[0].clientY > this.startEvent.changedTouches[0].clientY) && !this.onAboutMe) {
		// 		this.router.navigate(['/profile']);
		// 		this.onAboutMe = true;
		// 	}

		// });
	}


	public ngOnDestroy(): void {
		// this.touchStartListener();
		// this.touchMovedListener();
		this.listener();
	}

	public ngOnInit(): void { }

	public getState(outlet: RouterOutlet) {
		return outlet.activatedRouteData.state;
	}

}
