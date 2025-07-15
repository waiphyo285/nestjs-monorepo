import { Module } from '@nestjs/common';
import { Infrastructure/configsService } from './infrastructure/configs.service';

@Module({
  providers: [Infrastructure/configsService],
  exports: [Infrastructure/configsService],
})
export class Infrastructure/configsModule {}
