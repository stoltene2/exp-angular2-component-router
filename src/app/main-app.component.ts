import { Component, OnInit } from '@angular/core';

import { MdToolbar } from '@angular2-material/toolbar';
import {
  ROUTER_DIRECTIVES,
  Routes,
  Router
} from '@angular/router';

import { PersonListComponent } from './person-list';

import { PeopleComponent } from './people';
import { GroupComponent } from './group';

@Component({
  moduleId: module.id,
  selector: 'main-app',
  templateUrl: 'main-app.component.html',
  styleUrls: ['main-app.component.css'],
  directives: [
    MdToolbar,
    ROUTER_DIRECTIVES,
    PersonListComponent
  ]
})
@Routes([
  { path: '/people', component: PeopleComponent},
  { path: '/groups', component: GroupComponent}
])
export class MainAppComponent implements OnInit {
  title = 'Look, no hands';
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/people']);
  }
}
