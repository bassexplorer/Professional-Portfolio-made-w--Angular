import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { DrawerService } from './drawer.service';



@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	public onHome: string;
	public onIpadPro: boolean
	public onDrawerToggle = false;
	@ViewChild('drawerContainer', { static: true }) public drawerContainer: MatDrawerContainer;
	@ViewChild(MatToolbar, { static: true }) public matToolbar: MatToolbar;
	constructor(
		private drawerService: DrawerService,
		private renderer: Renderer2,
		private router: Router,
		breakpointObserver: BreakpointObserver
	) {

		breakpointObserver.observe([

			Breakpoints.WebPortrait,
			Breakpoints.TabletPortrait,
			Breakpoints.Handset,

		]).subscribe((result) => {
			if (result.matches) {
				this.onIpadPro = true;
			} else {
				this.onIpadPro = false;
			}
		});
	}


	public ngOnInit() {

		this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((currentPage) => {

			if ((currentPage as NavigationEnd).url === '/' || (currentPage as NavigationEnd).url === '/home') {

				this.renderer.setStyle(this.matToolbar._elementRef.nativeElement, 'color', '#e1e1e1');
				this.renderer.addClass(this.matToolbar._elementRef.nativeElement, 'on-home-nav');
				this.onHome = 'primary';
			} else {

				this.renderer.removeStyle(this.matToolbar._elementRef.nativeElement, 'color');
				this.renderer.removeClass(this.matToolbar._elementRef.nativeElement, 'on-home-nav');
				this.onHome = 'accent';

			}

		});
	}

	public toggleDrawer() {
		this.drawerService.toggle();
		this.onDrawerToggle = !this.onDrawerToggle;
	}


	// @HostListener('window:scroll', ['$event']) public onScroll(event: Event) {

	// 	if (pageYOffset > 100) {

	// 		this.renderer.addClass(this.matToolbar._elementRef.nativeElement, 'scrolled');


	// 	} else {
	// 		this.renderer.removeClass(this.matToolbar._elementRef.nativeElement, 'scrolled');
	// 	}
	// }

}
