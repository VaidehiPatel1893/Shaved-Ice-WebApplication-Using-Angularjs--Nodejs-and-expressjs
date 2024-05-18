import { Component } from '@angular/core';
import { sample_foods } from 'backend/src/data';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent {
  newFoodItem: {
    id: string;
    name: string;
    price: number;
    cookTime: string;
    favorite: boolean;
    tags: string[];
  } = {
    id: '',
    name: '',
    price: 0,
    cookTime: '',
    favorite: false,
    tags: [],
  };

  onSubmit() {
    // Populate newFoodItem with form data
    this.newFoodItem.id = (sample_foods.length + 1).toString();
    
    // Trim individual tags if needed
    this.newFoodItem.tags = this.newFoodItem.tags.map(tag => tag.trim());

    // Add validation and data formatting as needed

    // Push the populated newFoodItem into the sample_foods array
    sample_foods.push({ ...this.newFoodItem });

    // You can save the updated sample_foods array to your data.ts file or perform further actions here.

    // For demonstration purposes, log the new item:
    console.log('New Food Item:', this.newFoodItem);

    // Clear the form for the next entry
    this.newFoodItem = {
      id: '',
      name: '',
      price: 0,
      cookTime: '',
      favorite: false,
      tags: [],
    };
  }
}
