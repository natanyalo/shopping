import { Items } from "./items.entity";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Cart } from "./cart.entity";

export type PurchaseDocument = Purchase & Document;

@Schema()
export class Purchase  {
    @Prop({ required: true })
    email:string;
    @Prop({ required: true })
    name:string;
    @Prop({ required: true })
    cart: Cart;
}
export const PurchaseSchema = SchemaFactory.createForClass(Purchase);