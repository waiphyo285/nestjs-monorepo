import { Test, TestingModule } from '@nestjs/testing';
import { Framework/handlersService } from './framework/handlers.service';

describe('Framework/handlersService', () => {
  let service: Framework/handlersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Framework/handlersService],
    }).compile();

    service = module.get<Framework/handlersService>(Framework/handlersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
