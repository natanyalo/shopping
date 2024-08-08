
import { IsEmail, IsNumber, isNumber, IsObject } from "class-validator"
export class PurchaseDto  {
    name:string;
    @IsEmail()
    email:string;
    @IsObject()
   cart:{
    totalAmount: number;
    items: {
        id:string
        name: string;
        quantity: number;
        category:string
        total: number;
        price: number;
    }[];
}
}