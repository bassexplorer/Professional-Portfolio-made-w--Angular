import { DragRef } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { BreakpointService } from '../../shared/breakpoint.service';

@Component({
	selector: 'app-about-me',
	templateUrl: './about-me.component.html',
	styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

	public onIpadPro: boolean;
	public breakpointObserverSubscription: Subscription;
	public breakpointObs$;
	@ViewChild('dragRef', { static: true }) public dragRef: DragRef;
	constructor(private breakpointService: BreakpointService) {
		this.breakpointObs$ = this.breakpointService.breakpoints;
	}

	public ngOnInit(): void { }


}
