export class User {
    _id: string = '';
    username: string = '';
    email: string = '';
    password: string = '';
    createdAt?: Date;
    updatedAt?: Date;
  
    constructor() {
      // You can initialize createdAt and updatedAt properties here if needed
    }
  }