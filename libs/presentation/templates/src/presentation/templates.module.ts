import { Module } from '@nestjs/common';
import { Presentation/templatesService } from './presentation/templates.service';

@Module({
  providers: [Presentation/templatesService],
  exports: [Presentation/templatesService],
})
export class Presentation/templatesModule {}
