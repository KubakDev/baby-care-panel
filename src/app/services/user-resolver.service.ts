import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolverService implements Resolve<User> {
  constructor(private item: ItemService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    const id = route.params['userId'];
    return this.item.items[id];
  }
}
