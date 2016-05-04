import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { IGroup } from '../interfaces';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class GroupService {
  constructor(public http: Http) {}

  getGroups(): Observable<IGroup[]> {
    return this.http.get('/data/groups.json').map((r) => {
      return <IGroup[]>r.json()
    });
  }
}
