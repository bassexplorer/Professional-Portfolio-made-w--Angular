import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CopyService } from './copy.service';

@Component({
	selector: 'app-copyright',
	templateUrl: './copyright.component.html',
	styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit, OnDestroy {

	public isCopiedSwitch = false;
	public copySubscription: Subscription;

	constructor(private copyService: CopyService) { }


	public ngOnInit(): void {
		this.copySubscription = this.copyService.copiedSubject.subscribe((status) => {
			this.isCopiedSwitch = status;
		});
	}

	public copyEmail(event: MouseEvent) {
		const textContent = (event.target as HTMLElement).textContent;
		this.copyService.copyEmail(textContent);
	}

	public ngOnDestroy(): void {
		this.copySubscription.unsubscribe();
	}
}
