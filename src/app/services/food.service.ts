import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFoodItem } from '../shared/models/food-item.model';
import { Tag } from '../shared/models/Tag'; // Adjust the import path as needed

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiUrl = 'http://localhost:3000/api/foods'; // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  getAllFoodItems(): Observable<IFoodItem[]> {
    return this.http.get<IFoodItem[]>(`${this.apiUrl}`);
  }

  getFoodItemById(id: string): Observable<IFoodItem> {
    return this.http.get<IFoodItem>(`${this.apiUrl}/${id}`);
  }

  createFoodItem(foodItem: IFoodItem): Observable<IFoodItem> {
    return this.http.post<IFoodItem>(`${this.apiUrl}`, foodItem);
  }

  updateFoodItem(id: string, updates: Partial<IFoodItem>): Observable<IFoodItem> {
    return this.http.put<IFoodItem>(`${this.apiUrl}/${id}`, updates);
  }

  deleteFoodItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.apiUrl}/tags`);
  }
  getAllFoodsByTag(tagName: string): Observable<IFoodItem[]> {
    return this.http.get<IFoodItem[]>(`${this.apiUrl}/tag/${tagName}`);
  }
  getAll(): Observable<IFoodItem[]> {
    return this.http.get<IFoodItem[]>(`${this.apiUrl}`);
  }
  getAllFoodsBySearchTerm(searchTerm: string): Observable<IFoodItem[]> {
    return this.http.get<IFoodItem[]>(`${this.apiUrl}/search/${searchTerm}`);
  }
}
