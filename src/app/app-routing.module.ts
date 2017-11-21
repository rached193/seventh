import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import {CoursesListComponent} from './courser-list/courser-list.component';
import {CreateCharacterComponent} from './create-character/create-character.component';


const routes: Routes = [
  {path: 'course', component: CoursesListComponent},
  {path: 'create', component: CreateCharacterComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class RoutingModule {
}
