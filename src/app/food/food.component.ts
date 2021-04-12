import { Component, OnInit } from '@angular/core';
import { FOODITEMS } from '../fooddata';
import { MenuItem } from '../menuitem';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  // fooditems = FOODITEMS;

  fooditems: MenuItem[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.getFoodItems();
  }

  getFoodItems(): void {
    this.foodService.getFoodItems().subscribe(fooditems => this.fooditems = fooditems);
  }

  addToCart() {
    window.alert(`Your item has been added to the cart`);
  }

}
