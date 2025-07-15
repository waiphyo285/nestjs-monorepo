import { Module } from '@nestjs/common';
import { Framework/decoratorsService } from './framework/decorators.service';

@Module({
  providers: [Framework/decoratorsService],
  exports: [Framework/decoratorsService],
})
export class Framework/decoratorsModule {}
