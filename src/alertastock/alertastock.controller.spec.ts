import { Test, TestingModule } from '@nestjs/testing';
import { AlertastockController } from './alertastock.controller';

describe('AlertastockController', () => {
  let controller: AlertastockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlertastockController],
    }).compile();

    controller = module.get<AlertastockController>(AlertastockController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
