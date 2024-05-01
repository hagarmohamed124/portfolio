import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EductionComponent } from './eduction/eduction.component';
import { MeComponent } from './me/me.component';
import { ProjectsComponent } from './projects/projects.component';
import { HtmlCssComponent } from './html-css/html-css.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { JsComponent } from './js/js.component';
import { AngularComponent } from './angular/angular.component';
import { AllComponent } from './all/all.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EductionComponent,
    MeComponent,
    ProjectsComponent,
    HtmlCssComponent,
    BootstrapComponent,
    JsComponent,
    AngularComponent,
    AllComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
