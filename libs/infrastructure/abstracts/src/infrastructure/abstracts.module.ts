import { Module } from '@nestjs/common';
import { Infrastructure/abstractsService } from './infrastructure/abstracts.service';

@Module({
  providers: [Infrastructure/abstractsService],
  exports: [Infrastructure/abstractsService],
})
export class Infrastructure/abstractsModule {}
