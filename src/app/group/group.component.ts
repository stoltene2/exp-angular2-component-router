import { Component, OnInit } from '@angular/core';
import { OnActivate } from '@angular/router';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { GroupService } from '../services/group.service';
import { IGroup } from '../interfaces';

@Component({
  moduleId: module.id,
  templateUrl: 'group.component.html',
  styleUrls: ['group.component.css'],
  providers: [GroupService],
  directives: [ MD_LIST_DIRECTIVES ]
})

export class GroupComponent implements OnInit, OnActivate {

  groups: IGroup[];

  constructor(private groupService: GroupService) {}

  routerOnActivate() {
    this.groupService.getGroups().subscribe(groups => this.groups = groups);
  }

  ngOnInit() {
  }
}
