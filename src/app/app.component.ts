import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { BreakpointService } from './shared/breakpoint.service';
import { routerTransition } from './shared/router.animations';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [routerTransition]
})
export class AppComponent implements OnInit {

	public title = 'Mark Bence Kiss - ';
	public particlesOptions: object = {};
	public breakpointObs$;
	constructor(private titleService: Title, private breakpointService: BreakpointService) {
		this.breakpointObs$ = this.breakpointService.breakpoints;
	}


	// this will be triggerd by the router transition and will
	// give back the 'state' data of the router data what we included in the router.module
	public getState(outlet: RouterOutlet) {
		this.titleService.setTitle(this.title + outlet.activatedRouteData.pageTitle);
		return outlet.activatedRouteData.state;
	}

	public onHomePage(outlet: RouterOutlet) {
		return outlet.activatedRouteData.state === 'home' ? false : true;
	}

	public onProfilePage(outlet: RouterOutlet) {
		return outlet.activatedRouteData.state === 'profile' ? true : false;
	}

	public inCaseStudy(outlet: RouterOutlet) {
		return outlet.activatedRouteData.state === 'case-studies' ? true : false;
	}


	public ngOnInit() {
	}

}
