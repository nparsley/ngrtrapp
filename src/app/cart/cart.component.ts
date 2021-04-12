import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { MenuItem } from '../menuitem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
  }

}
