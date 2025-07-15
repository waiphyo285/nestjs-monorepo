import { Module } from '@nestjs/common';
import { Framework/handlersService } from './framework/handlers.service';

@Module({
  providers: [Framework/handlersService],
  exports: [Framework/handlersService],
})
export class Framework/handlersModule {}
