import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { IPerson } from '../interfaces';


@Component({
  moduleId: module.id,
  selector: 'people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css'],
  providers: [PeopleService]
})
export class PeopleComponent implements OnInit {

  public people: IPerson[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.people = this.peopleService.getPeople();
  }

}
