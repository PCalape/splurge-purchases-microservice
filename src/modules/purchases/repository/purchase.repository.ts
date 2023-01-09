import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Purchase, PurchaseDocument } from '@schemas/purchase.schema';
import { ObjectID } from 'bson';
import { Model } from 'mongoose';
import { CreatePurchaseInput } from '../dto/input/create-purchase.input';
import { PurchaseOutput } from '../dto/output/purchase.output';

@Injectable()
export class PurchaseRepository {
  constructor(@InjectModel(Purchase.name) private purchaseModel: Model<PurchaseDocument>) {}

  async createPurchase(input: CreatePurchaseInput): Promise<PurchaseOutput> {
    return this.purchaseModel.create(input);
  }

  async getPurchases(): Promise<PurchaseOutput[]> {
    return this.purchaseModel.find({});
  }

  async getPurchase(id: string): Promise<PurchaseOutput> {
    return this.purchaseModel.findById(new ObjectID(id));
  }
}
