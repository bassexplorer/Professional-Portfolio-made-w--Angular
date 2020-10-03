import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const modules = [
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	MatMenuModule,
	MatSlideToggleModule,
	MatSidenavModule,
	MatListModule,
	MatGridListModule,
	MatFormFieldModule,
	MatInputModule,
	MatTooltipModule,
	MatDividerModule,
	LayoutModule,
	DragDropModule,
];

@NgModule({
	declarations: [],
	imports: [modules],
	exports: [modules],
	providers: [],
	bootstrap: []
})
export class MaterialModule { }
