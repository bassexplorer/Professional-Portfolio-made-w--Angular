import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { projectsArray, ProjectSchema } from '../../../app/shared/projects-infos';
import { ScrollService } from '../../shared/scroll-box/scroll.service';


@Component({
	selector: 'app-project-case',
	templateUrl: './project-case.component.html',
	styleUrls: ['./project-case.component.scss']
})
export class ProjectCaseComponent implements OnInit, AfterViewInit {

	public currentProject: ProjectSchema;
	@ViewChild('solutionPart') public solutionPart: ElementRef;

	constructor(private route: ActivatedRoute, private router: Router, private scrollService: ScrollService) {
		this.currentProject = projectsArray.find((caseOf) => {
			return caseOf.caseCode === this.route.snapshot.params['caseName'];
		});
	}

	public ngOnInit(): void {

		if (!this.currentProject) {
			this.router.navigate(['/page-not-found']);
		}
	}

	public ngAfterViewInit(): void {
		this.scrollService.scrollToDiv.next(this.solutionPart);

	}

}


