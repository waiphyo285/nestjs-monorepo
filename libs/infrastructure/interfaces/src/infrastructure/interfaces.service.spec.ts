import { Test, TestingModule } from '@nestjs/testing';
import { Infrastructure/interfacesService } from './infrastructure/interfaces.service';

describe('Infrastructure/interfacesService', () => {
  let service: Infrastructure/interfacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Infrastructure/interfacesService],
    }).compile();

    service = module.get<Infrastructure/interfacesService>(Infrastructure/interfacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
