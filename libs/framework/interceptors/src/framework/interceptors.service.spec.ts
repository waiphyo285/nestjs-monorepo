import { Test, TestingModule } from '@nestjs/testing';
import { Framework/interceptorsService } from './framework/interceptors.service';

describe('Framework/interceptorsService', () => {
  let service: Framework/interceptorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Framework/interceptorsService],
    }).compile();

    service = module.get<Framework/interceptorsService>(Framework/interceptorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
