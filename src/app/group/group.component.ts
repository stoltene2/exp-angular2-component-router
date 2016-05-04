import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import { IGroup } from '../interfaces';

@Component({
  moduleId: module.id,
  selector: 'group',
  templateUrl: 'group.component.html',
  styleUrls: ['group.component.css'],
  providers: [GroupService]
})

export class GroupComponent implements OnInit {

  public groups: IGroup[] = [];

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.groupService.getGroups().subscribe((groups) => this.groups = groups);
  }
}
