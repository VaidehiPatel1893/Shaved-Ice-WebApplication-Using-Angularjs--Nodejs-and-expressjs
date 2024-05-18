// models/FoodItem.ts

import mongoose, { Document } from 'mongoose';

export interface IFoodItem extends Document {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    createdAt?: Date;
    updatedAt?: Date;
    favourite:boolean;
    cookTime:string;
}

const FoodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model<IFoodItem>('FoodItem', FoodItemSchema);
