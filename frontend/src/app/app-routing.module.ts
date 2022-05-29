import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { IzmeniAutomobilComponent } from './izmeni-automobil/izmeni-automobil.component';
import { AutomobilComponent } from './automobil/automobil.component';
import { NewAutomobilComponent } from './new-automobil/new-automobil.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"", component:HomepageComponent},
  {path:"homepage", component:HomepageComponent},
  {path:"newAutomobil", component:NewAutomobilComponent},
  {path:"izmeniAutomobil/:id", component:IzmeniAutomobilComponent},
  {path:"automobil/:id", component:AutomobilComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
