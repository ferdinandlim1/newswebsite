import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},
  {path:'tech',component:TechComponent},
  {path:'sports',component:SportsComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'search/:searchTerm',component:TopheadingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
