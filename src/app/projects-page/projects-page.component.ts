import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Component({
	selector: 'app-projects-page',
	templateUrl: './projects-page.component.html',
	styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
	public currentStyle: object;
	private static MIN_WIDTH = '(min-width: 1441px)';
	private static MAX_WIDTH = '(min-width: 1025px) and (max-width: 1440px)';
	public maxWidth;
	constructor(breakpointObserver: BreakpointObserver) {
		this.maxWidth = breakpointObserver.observe([
			ProjectsPageComponent.MAX_WIDTH,
			ProjectsPageComponent.MIN_WIDTH,
		])
			.pipe(
				// tap(console.log),
				map((breakpoint: BreakpointState) => {
					let res = {};
					const { breakpoints } = breakpoint;
						if (breakpoints[ProjectsPageComponent.MIN_WIDTH]) {
							res = { 'background-position': 'center 4rem' };
						} else if (breakpoints[ProjectsPageComponent.MAX_WIDTH]) {
							res = { 'background-position': 'center bottom' };
						} else {
							res = { 'background-position': 'center center' };
						}
					return res;
				}),
			);
	}



	public ngOnInit(): void {
	}

}
