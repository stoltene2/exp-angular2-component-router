import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  moduleId: module.id,
  selector: 'people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css'],
  providers: [PeopleService]
})
export class PeopleComponent implements OnInit {

  constructor(private people: PeopleService) {}

  ngOnInit() {
    console.log(this.people.getPeople());
  }

}
