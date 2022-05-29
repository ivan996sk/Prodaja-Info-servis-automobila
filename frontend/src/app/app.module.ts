import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { IzmeniAutomobilComponent } from './izmeni-automobil/izmeni-automobil.component';
import { NewAutomobilComponent } from './new-automobil/new-automobil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AutomobilComponent } from './automobil/automobil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    AutomobilComponent,
    IzmeniAutomobilComponent,
    NewAutomobilComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
