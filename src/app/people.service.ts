import { Injectable } from '@angular/core';
import { IPerson } from './interfaces';

@Injectable()
export class PeopleService {

  constructor() {}

  getPeople(): IPerson[] {
    return [];
  }
}
