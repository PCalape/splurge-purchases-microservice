import { Injectable, Logger } from '@nestjs/common';
import { CreateSwanInput } from '../dto/input/create-swan.input';
import { UpdateSwanInput } from '../dto/input/update-swan.input';
import { SwanOutput } from '../dto/output/swan.output';
import { SwanRepository } from '../repository/swan.repository';

@Injectable()
export class SwanService {
  constructor(private readonly swanRepository: SwanRepository) {}
  private logger: Logger = new Logger(this.constructor.name);

  async createSwan(input: CreateSwanInput): Promise<SwanOutput> {
    return this.swanRepository.createSwan(input);
  }

  async updateSwan(id: string, input: UpdateSwanInput): Promise<void> {
    await this.swanRepository.updateSwan(id, input);
  }

  async getSwans(): Promise<SwanOutput[]> {
    return this.swanRepository.getSwans();
  }

  async getSwan(id: string): Promise<SwanOutput> {
    return this.swanRepository.getSwan(id);
  }
}
