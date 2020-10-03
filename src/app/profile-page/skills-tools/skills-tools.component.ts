import { Component, OnDestroy, OnInit } from '@angular/core';
import * as ParticlesSettings from 'src/assets/logoparticles.json';

import { BreakpointService } from './../../shared/breakpoint.service';

@Component({
	selector: 'app-skills-tools',
	templateUrl: './skills-tools.component.html',
	styleUrls: ['./skills-tools.component.scss'],
})
export class SkillsToolsComponent implements OnInit, OnDestroy {

	public particlesOptions: object = {};
	public onIpadPro: boolean;
	public breakpointObs$;
	constructor(private breakpointService: BreakpointService) {
		this.breakpointObs$ = this.breakpointService.breakpoints;
	}


	public ngOnInit() {
		this.particlesOptions = ParticlesSettings;
	}

	public ngOnDestroy(): void {
	}
}
