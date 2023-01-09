import { SwanGuard } from '@modules/common/guards/swan-microservice.guard';
import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateSwanInput } from '../dto/input/create-swan.input';
import { UpdateSwanInput } from '../dto/input/update-swan.input';
import { API } from '../dto/output/api.output.dto';
import { SwanOutput } from '../dto/output/swan.output';
import { SwanService as SwanService } from '../service/swan.service';

@Controller('swan')
export class SwanController {
  constructor(private readonly swanService: SwanService) {}

  @Get('/health-check')
  @UseGuards(SwanGuard)
  checkAPI(): API {
    return {
      message: 'Hello from Swan Service!',
    };
  }

  @Post('/create')
  @UseGuards(SwanGuard)
  async createSwan(@Body() input: CreateSwanInput): Promise<SwanOutput> {
    return this.swanService.createSwan(input);
  }

  @Patch('/update/:id')
  @UseGuards(SwanGuard)
  async updateSwan(@Param() id: string, @Body() input: UpdateSwanInput): Promise<void> {
    await this.swanService.updateSwan(id, input);
  }

  @Get('/all')
  @UseGuards(SwanGuard)
  async getSwans(): Promise<SwanOutput[]> {
    return this.swanService.getSwans();
  }

  @Get('/:id')
  @UseGuards(SwanGuard)
  async getSwan(@Param() id: string): Promise<SwanOutput> {
    return this.swanService.getSwan(id);
  }
}
