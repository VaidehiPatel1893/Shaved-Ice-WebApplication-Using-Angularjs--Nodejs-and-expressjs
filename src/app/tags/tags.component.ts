import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(api: FoodService) {
    api.getAllTags().subscribe(
      (serverTag) => {
        this.tags = serverTag;
        console.log('Fetched Tags:', this.tags);
      },
      (error) => {
        console.error('Error fetching tags:', error);
        // Handle the error as needed
      }
    );
  }
  
  ngOnInit(): void {
  }

}
