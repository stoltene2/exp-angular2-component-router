import { Component } from '@angular/core';

import { PeopleComponent } from './people/';

@Component({
  moduleId: module.id,
  selector: 'main-app',
  templateUrl: 'main-app.component.html',
  styleUrls: ['main-app.component.css'],
  directives: [PeopleComponent]
})
export class MainAppComponent {
  title = 'ng2-demo-app works!';
}
