import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-project-card',
	templateUrl: './project-card.component.html',
	styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

	@Input() public dataSource;

	constructor() { }

	public ngOnInit(): void {
	}

}
