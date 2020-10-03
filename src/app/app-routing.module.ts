import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutMeComponent } from './profile-page/about-me/about-me.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SkillsToolsComponent } from './profile-page/skills-tools/skills-tools.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';



const routes: Routes = [

	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomePageComponent, data: { state: 'home', pageTitle: 'Home' } },
	{
		path: 'profile', component: ProfilePageComponent, children: [
			{ path: '', component: AboutMeComponent, data: { state: 'aboutme', pageTitle: 'About Me' } },
			{ path: 'skills', component: SkillsToolsComponent, data: { state: 'skills', pageTitle: 'Skills & Tools' } },

		], data: { state: 'profile', pageTitle: 'About Me' }
	},
	{ path: 'projects', component: ProjectsPageComponent, data: { state: 'projects', pageTitle: 'Projects' } },
	{ path: 'contact', component: ContactPageComponent, data: { state: 'contact', pageTitle: 'Contact' } },


	{ path: 'page-not-found', component: PageNotFoundComponent, data: { state: 'notfound', pageTitle: 'Page Not Found' } },
	{ path: '**', redirectTo: 'page-not-found' }


];

export const AppRouting = RouterModule.forRoot(routes, {
	useHash: true
});

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
