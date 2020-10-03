import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

import { DrawerService } from '../header/drawer.service';


@Component({
	selector: 'app-menu-panel',
	templateUrl: './menu-panel.component.html',
	styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanelComponent implements OnInit, AfterViewInit {


	@ViewChild(MatDrawer, { static: true }) public matDrawer: MatDrawer;
	constructor(private drawerService: DrawerService) { }

	public ngAfterViewInit(): void {
		this.drawerService.setDrawer(this.matDrawer);
	}

	public ngOnInit() { }


}
