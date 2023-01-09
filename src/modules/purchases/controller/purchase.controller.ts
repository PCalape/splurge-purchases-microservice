import { PurchaseGuard } from '@modules/common/guards/purchase-microservice.guard';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreatePurchaseInput } from '../dto/input/create-purchase.input';
import { API } from '../dto/output/api.output.dto';
import { PurchaseOutput } from '../dto/output/purchase.output';
import { PurchaseService } from '../service/purchase.service';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get('/health-check')
  @UseGuards(PurchaseGuard)
  checkAPI(): API {
    return {
      message: 'Hello from Purchase Service!',
    };
  }

  @Post('/create')
  @UseGuards(PurchaseGuard)
  async createPurchase(@Body() input: CreatePurchaseInput): Promise<PurchaseOutput> {
    return this.purchaseService.createPurchase(input);
  }

  @Get('/all')
  @UseGuards(PurchaseGuard)
  async getPurchases(): Promise<PurchaseOutput[]> {
    return this.purchaseService.getPurchases();
  }

  @Get('/:id')
  @UseGuards(PurchaseGuard)
  async getPurchase(@Param() id: string): Promise<PurchaseOutput> {
    return this.purchaseService.getPurchase(id);
  }
}
