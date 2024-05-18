import { Food } from "./Food";

export class CartItem{
  constructor(public food: Food, public color: string = 'color') {}
  quantity:number = 1 ;
  price: number = this.food.price;
}
