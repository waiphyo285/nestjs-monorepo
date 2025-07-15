import { Test, TestingModule } from '@nestjs/testing';
import { Framework/middlewaresService } from './framework/middlewares.service';

describe('Framework/middlewaresService', () => {
  let service: Framework/middlewaresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Framework/middlewaresService],
    }).compile();

    service = module.get<Framework/middlewaresService>(Framework/middlewaresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
