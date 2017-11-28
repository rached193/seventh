/* Librerias para las dependencias de firebase */
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';


/* Angular Material */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

/* Core */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RoutingModule} from './/app-routing.module';

import {environment} from "../environments/environment";

/* Pipes */
import {KeysPipe} from './app-navbar/forKey';

/* Componentes */
import {AppComponent} from './root.component';
import {AppNavbarComponent} from './app-navbar/app-navbar.component';
import {CoursesListComponent} from './courser-list/courser-list.component';

import {CreateCharacterComponent} from './create-character/create-character.component';
import {HomeComponent} from './home/home.component';
import {PersonajesComponent} from './personajes/personajes.component';


@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    AppNavbarComponent,
    CoursesListComponent,
    CreateCharacterComponent,
    HomeComponent,
    PersonajesComponent
  ],
  imports: [
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
