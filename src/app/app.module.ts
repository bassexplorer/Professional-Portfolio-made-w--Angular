import { ClipboardModule } from '@angular/cdk/clipboard';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgParticlesModule } from 'ng-particles';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DarkModeSwitchDirective } from './header/dark-mode-switch.directive';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutMeComponent } from './profile-page/about-me/about-me.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SkillsToolsComponent } from './profile-page/skills-tools/skills-tools.component';
import { ProjectCardComponent } from './projects-page/project-card/project-card.component';
import { ProjectCaseComponent } from './projects-page/project-case/project-case.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { CopyrightComponent } from './shared/copyright/copyright.component';
import { MaterialModule } from './shared/material.module';
import { ScrollBoxComponent } from './shared/scroll-box/scroll-box.component';
import { ScrollFollowerDirective } from './shared/scroll-follower.directive';
import { TooltipDirective } from './shared/tooltip.directive';



@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		DarkModeSwitchDirective,
		MenuPanelComponent,
		HomePageComponent,
		ProjectsPageComponent,
		PageNotFoundComponent,
		ProfilePageComponent,
		TooltipDirective,
		ScrollFollowerDirective,
		ContactPageComponent,
		AboutMeComponent,
		ScrollBoxComponent,
		SkillsToolsComponent,
		CopyrightComponent,
		ProjectCardComponent,
		ProjectCaseComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule,
		NgParticlesModule,
		ReactiveFormsModule,
		FormsModule,
		ClipboardModule,
		OverlayModule,
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {



}
