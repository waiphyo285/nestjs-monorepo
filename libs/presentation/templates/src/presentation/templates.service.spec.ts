import { Test, TestingModule } from '@nestjs/testing';
import { Presentation/templatesService } from './presentation/templates.service';

describe('Presentation/templatesService', () => {
  let service: Presentation/templatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Presentation/templatesService],
    }).compile();

    service = module.get<Presentation/templatesService>(Presentation/templatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
