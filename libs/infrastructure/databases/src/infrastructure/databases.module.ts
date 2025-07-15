import { Module } from '@nestjs/common';
import { Infrastructure/databasesService } from './infrastructure/databases.service';

@Module({
  providers: [Infrastructure/databasesService],
  exports: [Infrastructure/databasesService],
})
export class Infrastructure/databasesModule {}
