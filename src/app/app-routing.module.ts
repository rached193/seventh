import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import {CoursesListComponent} from './courser-list/courser-list.component';
import {CreateCharacterComponent} from './create-character/create-character.component';
import {HomeComponent} from './home/home.component';
import {PersonajesComponent} from './personajes/personajes.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'course', component: CoursesListComponent, pathMatch: 'full'},
  {path: 'create', component: CreateCharacterComponent, pathMatch: 'full'},
  {path: 'list', component: PersonajesComponent, pathMatch: 'full'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class RoutingModule {
}
