import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from './menuitem';
import { FOODITEMS } from './fooddata';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodItems(): Observable<MenuItem[]> {
    const fooditems = of(FOODITEMS);
    return fooditems;
  }

  addToCart() {

  }

}
