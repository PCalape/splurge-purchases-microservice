import { DEFAULT_PROFILE_PICTURE, SWAN_INITIAL_BALANCE } from '@modules/common/environment';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Swan, SwanDocument } from '@schemas/swan.schema';
import { ObjectID } from 'bson';
import { Model } from 'mongoose';
import { CreateSwanInput } from '../dto/input/create-swan.input';
import { UpdateSwanInput } from '../dto/input/update-swan.input';
import { SwanOutput } from '../dto/output/swan.output';

@Injectable()
export class SwanRepository {
  constructor(@InjectModel(Swan.name) private swanModel: Model<SwanDocument>) {}

  async createSwan(input: CreateSwanInput): Promise<SwanOutput> {
    return this.swanModel.create({ ...input, value: SWAN_INITIAL_BALANCE, defaultPhotoURL: DEFAULT_PROFILE_PICTURE });
  }

  async updateSwan(id: string, input: UpdateSwanInput): Promise<void> {
    await this.swanModel.updateOne({ _id: new ObjectID(id), ...input });
  }

  async getSwans(): Promise<SwanOutput[]> {
    return this.swanModel.find({});
  }

  async getSwan(id: string): Promise<SwanOutput> {
    return this.swanModel.findById(new ObjectID(id));
  }
}
