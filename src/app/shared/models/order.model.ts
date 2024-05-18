export class Order {
    _id: string = '';
    userId: string = '';
    items: { productId: string; quantity: number }[] = [];
    totalPrice: number = 0;
    status: string = '';
    createdAt?: Date;
    updatedAt?: Date;
  
    constructor() {
      // You can initialize createdAt and updatedAt properties here if needed
    }
  }