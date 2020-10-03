import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DrawerService {

	public onHomePage = new Subject<boolean>();

	private matDrawer: MatDrawer;

	public setDrawer(drawer: MatDrawer) {
		this.matDrawer = drawer;
	}

	public toggle(): void {
		this.matDrawer.toggle();
	}
}
