import { Module } from '@nestjs/common';
import { Infrastructure/interfacesService } from './infrastructure/interfaces.service';

@Module({
  providers: [Infrastructure/interfacesService],
  exports: [Infrastructure/interfacesService],
})
export class Infrastructure/interfacesModule {}
