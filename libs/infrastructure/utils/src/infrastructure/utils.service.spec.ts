import { Test, TestingModule } from '@nestjs/testing';
import { Infrastructure/utilsService } from './infrastructure/utils.service';

describe('Infrastructure/utilsService', () => {
  let service: Infrastructure/utilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Infrastructure/utilsService],
    }).compile();

    service = module.get<Infrastructure/utilsService>(Infrastructure/utilsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
