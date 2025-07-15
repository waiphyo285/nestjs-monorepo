import { Test, TestingModule } from '@nestjs/testing';
import { Framework/decoratorsService } from './framework/decorators.service';

describe('Framework/decoratorsService', () => {
  let service: Framework/decoratorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Framework/decoratorsService],
    }).compile();

    service = module.get<Framework/decoratorsService>(Framework/decoratorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
