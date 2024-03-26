import { Test, TestingModule } from '@nestjs/testing';
import { ProductpropsController } from './productprops.controller';
import { ProductpropsService } from './productprops.service';

describe('ProductpropsController', () => {
  let controller: ProductpropsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductpropsController],
      providers: [ProductpropsService],
    }).compile();

    controller = module.get<ProductpropsController>(ProductpropsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
