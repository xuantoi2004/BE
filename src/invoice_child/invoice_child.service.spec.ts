import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceChildService } from './invoice_child.service';

describe('InvoiceChildService', () => {
  let service: InvoiceChildService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvoiceChildService],
    }).compile();

    service = module.get<InvoiceChildService>(InvoiceChildService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
