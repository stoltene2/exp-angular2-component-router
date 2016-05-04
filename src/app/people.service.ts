import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { IPerson } from './interfaces';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class PeopleService {
  constructor(public http: Http) {}

  getPeople(): Observable<IPerson[]> {
    return this.http.get('/data/people.json').map((r) => {
      return <IPerson[]>r.json()
    });
  }
}
