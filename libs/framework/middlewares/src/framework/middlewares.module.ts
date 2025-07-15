import { Module } from '@nestjs/common';
import { Framework/middlewaresService } from './framework/middlewares.service';

@Module({
  providers: [Framework/middlewaresService],
  exports: [Framework/middlewaresService],
})
export class Framework/middlewaresModule {}
