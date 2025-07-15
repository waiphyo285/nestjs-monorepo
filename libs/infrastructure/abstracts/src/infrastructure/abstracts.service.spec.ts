import { Test, TestingModule } from '@nestjs/testing';
import { Infrastructure/abstractsService } from './infrastructure/abstracts.service';

describe('Infrastructure/abstractsService', () => {
  let service: Infrastructure/abstractsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Infrastructure/abstractsService],
    }).compile();

    service = module.get<Infrastructure/abstractsService>(Infrastructure/abstractsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
