import { Test, TestingModule } from '@nestjs/testing';
import { ProductpropsService } from './productprops.service';

describe('ProductpropsService', () => {
  let service: ProductpropsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductpropsService],
    }).compile();

    service = module.get<ProductpropsService>(ProductpropsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
