import { Component } from '@angular/core';

import { PeopleComponent } from './people';
import { GroupComponent } from './group';

@Component({
  moduleId: module.id,
  selector: 'main-app',
  templateUrl: 'main-app.component.html',
  styleUrls: ['main-app.component.css'],
  directives: [
    GroupComponent,
    PeopleComponent
  ]
})
export class MainAppComponent {
  title = 'ng2-demo-app works!';
}
