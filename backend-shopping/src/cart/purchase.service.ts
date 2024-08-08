import { Injectable } from '@nestjs/common';

import { randomUUID } from 'crypto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PurchaseDto } from './dto/create-purchase.dto';
import { Purchase, PurchaseDocument } from './entities/purchase.entity';

@Injectable()
export class PurchaseService {
  
  constructor(@InjectModel(Purchase.name) private PurchaseModel: Model<PurchaseDocument>) {}
  async create(createPurchaseDto: PurchaseDto):Promise<void>  {
    const purchase=new this.PurchaseModel({
      ...createPurchaseDto
    });
    const createdPurchase = new this.PurchaseModel(purchase);
    console.log(createdPurchase)
     await createdPurchase.save();
  
  }

  findAll() {
    return `This action returns all purchase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchase`;
  }



  remove(id: number) {
    return `This action removes a #${id} purchase`;
  }
}
