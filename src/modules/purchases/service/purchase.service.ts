import { Injectable, Logger } from '@nestjs/common';
import { CreatePurchaseInput } from '../dto/input/create-purchase.input';
import { PurchaseOutput } from '../dto/output/purchase.output';
import { PurchaseRepository } from '../repository/purchase.repository';

@Injectable()
export class PurchaseService {
  constructor(private readonly purchaseRepository: PurchaseRepository) {}
  private logger: Logger = new Logger(this.constructor.name);

  async createPurchase(input: CreatePurchaseInput): Promise<PurchaseOutput> {
    return this.purchaseRepository.createPurchase(input);
  }

  async getPurchases(): Promise<PurchaseOutput[]> {
    return this.purchaseRepository.getPurchases();
  }

  async getPurchase(id: string): Promise<PurchaseOutput> {
    return this.purchaseRepository.getPurchase(id);
  }
}
