import { Items } from "./items.entity";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart  {
    @Prop({ required: true })
    totalAmount: number;
    @Prop({ required: true })
    items: Array<Items>
}
export const CartSchema = SchemaFactory.createForClass(Cart);