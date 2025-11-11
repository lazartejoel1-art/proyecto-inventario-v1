import { Test, TestingModule } from '@nestjs/testing';
import { AlertastockService } from './alertastock.service';

describe('AlertastockService', () => {
  let service: AlertastockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlertastockService],
    }).compile();

    service = module.get<AlertastockService>(AlertastockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
