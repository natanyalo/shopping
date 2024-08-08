import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemsDocument = Items & Document;
@Schema()
export class Items{
    @Prop({ required: true })
    id:string
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    quantity: number;
    @Prop({ required: true })
    total: number;
    @Prop({ required: true })
    price: number;
}
