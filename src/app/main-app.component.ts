import { Component } from '@angular/core';

import {MdToolbar} from '@angular2-material/toolbar';

import { PeopleComponent } from './people';
import { GroupComponent } from './group';

@Component({
  moduleId: module.id,
  selector: 'main-app',
  templateUrl: 'main-app.component.html',
  styleUrls: ['main-app.component.css'],
  directives: [
    MdToolbar,

    GroupComponent,
    PeopleComponent,
  ]
})
export class MainAppComponent {
  title = 'Look, no hands';
}
