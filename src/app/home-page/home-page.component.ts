import { Component, OnDestroy, OnInit } from '@angular/core';

import { DrawerService } from '../header/drawer.service';
import { homepageloading } from '../shared/animations';


@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss'],
	animations: [homepageloading]
})
export class HomePageComponent implements OnInit, OnDestroy {

	constructor(private homePage: DrawerService) { }

	public ngOnInit(): void {
		this.homePage.onHomePage.next(true);
	}

	public ngOnDestroy(): void {
		this.homePage.onHomePage.next(false);
	}



}
