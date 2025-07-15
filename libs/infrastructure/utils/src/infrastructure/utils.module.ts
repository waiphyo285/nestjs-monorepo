import { Module } from '@nestjs/common';
import { Infrastructure/utilsService } from './infrastructure/utils.service';

@Module({
  providers: [Infrastructure/utilsService],
  exports: [Infrastructure/utilsService],
})
export class Infrastructure/utilsModule {}
