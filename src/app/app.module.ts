/* Liberias para las dependencias de firebase */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {environment} from "../environments/environment";

/* Componentes */
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CoursesListComponent } from './courser-list/courser-list.component';


console.log(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CoursesListComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
