import { Component, OnInit } from '@angular/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { PeopleService } from '../people.service';
import { IPerson } from '../interfaces';


@Component({
  moduleId: module.id,
  selector: 'people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css'],
  providers: [PeopleService],
  directives: [MD_LIST_DIRECTIVES]
})
export class PeopleComponent implements OnInit {

  public people: IPerson[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe((people) => this.people = people);
  }

}
