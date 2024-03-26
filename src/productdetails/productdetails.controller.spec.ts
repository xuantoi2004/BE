import { Test, TestingModule } from '@nestjs/testing';
import { ProductdetailsController } from './productdetails.controller';
import { ProductdetailsService } from './productdetails.service';

describe('ProductdetailsController', () => {
  let controller: ProductdetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductdetailsController],
      providers: [ProductdetailsService],
    }).compile();

    controller = module.get<ProductdetailsController>(ProductdetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
