import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class BreakpointService {

	public breakpoints = new Observable<any>();

	constructor(private breakpointObserver: BreakpointObserver,
	) {
		this.breakpoints = this.breakpointObserver.observe([
			Breakpoints.WebPortrait,
			Breakpoints.TabletPortrait,
			Breakpoints.HandsetPortrait,

		]).pipe(
			// tap(console.log),
			map((dummy: BreakpointState) => dummy.matches),

			// finalize(() => console.log('FASZOOOOOOOOOOOOOOOM'))
		);

	}

}
