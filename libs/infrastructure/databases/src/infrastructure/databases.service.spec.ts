import { Test, TestingModule } from '@nestjs/testing';
import { Infrastructure/databasesService } from './infrastructure/databases.service';

describe('Infrastructure/databasesService', () => {
  let service: Infrastructure/databasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Infrastructure/databasesService],
    }).compile();

    service = module.get<Infrastructure/databasesService>(Infrastructure/databasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
