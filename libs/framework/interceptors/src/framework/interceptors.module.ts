import { Module } from '@nestjs/common';
import { Framework/interceptorsService } from './framework/interceptors.service';

@Module({
  providers: [Framework/interceptorsService],
  exports: [Framework/interceptorsService],
})
export class Framework/interceptorsModule {}
