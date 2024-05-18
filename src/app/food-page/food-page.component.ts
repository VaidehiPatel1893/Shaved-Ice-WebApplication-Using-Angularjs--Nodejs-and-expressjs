import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';
import { IFoodItem } from '../shared/models/food-item.model';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!: IFoodItem;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const foodId = params['id'];
      this.loadFoodById(foodId);
    });
  }

  loadFoodById(foodId: string): void {
    this.foodService.getFoodItemById(foodId).subscribe(
      (serverFood) => {
        console.log(serverFood); // Log the response to check if it's correct.
        this.food = serverFood;
      },
      (error) => {
        console.error(error); // Log any errors.
      }
    );
  }

  addToCart(): void {
    // Assuming addToCart method in CartService expects IFoodItem
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
  
}
