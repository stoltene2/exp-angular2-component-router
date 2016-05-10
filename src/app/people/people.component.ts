import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { PersonListComponent } from '../person-list';

@Component({
  moduleId: module.id,
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
@Routes([
  { path: '', component: PersonListComponent},
  { path: '/:id', component: PersonListComponent}
])
export class PeopleComponent {}
