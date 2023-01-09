import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SwanController } from './controller/swan.controller';
import { SwanService } from './service/swan.service';
import { SwanSchema, Swan } from '@schemas/swan.schema';
import { SwanRepository } from './repository/swan.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Swan.name, schema: SwanSchema }])],
  providers: [SwanService, SwanRepository],
  controllers: [SwanController],
})
export class SwanModule {}
