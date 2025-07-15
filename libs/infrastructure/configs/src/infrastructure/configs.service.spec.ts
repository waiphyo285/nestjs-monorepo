import { Test, TestingModule } from '@nestjs/testing';
import { Infrastructure/configsService } from './infrastructure/configs.service';

describe('Infrastructure/configsService', () => {
  let service: Infrastructure/configsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Infrastructure/configsService],
    }).compile();

    service = module.get<Infrastructure/configsService>(Infrastructure/configsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
