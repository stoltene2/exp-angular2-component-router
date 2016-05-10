import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OnActivate } from '@angular/router';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { PeopleService } from '../people.service';
import { IPerson } from '../interfaces';

@Component({
  moduleId: module.id,
  selector: 'person-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'person-list.component.html',
  styleUrls: ['person-list.component.css'],
  providers: [PeopleService],
  directives: [MD_LIST_DIRECTIVES]
})
export class PersonListComponent implements OnActivate {
  people: IPerson[];

  constructor(private peopleService: PeopleService,
              private cd: ChangeDetectorRef) {  }

  routerOnActivate() {
    this.peopleService.getPeople().subscribe(people => {
      this.people = people;

    }, null, () => this.cd.markForCheck());
  }
}
