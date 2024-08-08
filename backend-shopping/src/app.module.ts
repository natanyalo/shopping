import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchaseModule } from './cart/purchase.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/shopping'), 
    PurchaseModule,
  ],
  controllers: [],
  providers: [],
  exports: [], // Exporting HttpModule
})
export class AppModule {}
