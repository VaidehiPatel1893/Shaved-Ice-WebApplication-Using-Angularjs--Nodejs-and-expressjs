import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from '../services/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];
  constructor(private api:FoodService, activatedRoute: ActivatedRoute) {
    let foodsObservable:Observable<Food[]>
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
      foodsObservable = this.api.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
      foodsObservable = this.api.getAllFoodsByTag(params['tag']);
      else
      foodsObservable = api.getAll();
      foodsObservable.subscribe((serverFoods)=>{
        this.foods= serverFoodss
      })
    })

  }

  ngOnInit(): void {
  }

}
