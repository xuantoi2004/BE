import { Test, TestingModule } from '@nestjs/testing';
import { ProductdetailsService } from './productdetails.service';

describe('ProductdetailsService', () => {
  let service: ProductdetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductdetailsService],
    }).compile();

    service = module.get<ProductdetailsService>(ProductdetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
