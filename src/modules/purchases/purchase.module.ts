import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchaseController } from './controller/purchase.controller';
import { PurchaseService } from './service/purchase.service';
import { PurchaseSchema, Purchase } from '@schemas/purchase.schema';
import { PurchaseRepository } from './repository/purchase.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Purchase.name, schema: PurchaseSchema }])],
  providers: [PurchaseService, PurchaseRepository],
  controllers: [PurchaseController],
})
export class PurchaseModule {}
