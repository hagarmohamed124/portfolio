import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'', redirectTo:'me', pathMatch:'full'},
  {path:'about' , component:AboutComponent},
  {path:'home' , component:EductionComponent},
  {path:'me' , component:MeComponent},
  {path:'Skills' , component:SkillsComponent },
  {path:'contact' , component:ContactComponent },
  {path:'Projects' , component:ProjectsComponent , children:[
    {path:'', redirectTo:'all', pathMatch:'full'},
    {path:'htmlCss' , component:HtmlCssComponent},
    {path:'bootstrap' , component:BootstrapComponent},
    {path:'js' , component:JsComponent},
    {path:'angular' , component:AngularComponent},
    {path:'all' , component:AllComponent },

    
  
  ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // import { AllComponent } from './all/all.component';
exports: [RouterModule]
})
export class AppRoutingModule { }
