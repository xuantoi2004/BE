import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceChildController } from './invoice_child.controller';
import { InvoiceChildService } from './invoice_child.service';

describe('InvoiceChildController', () => {
  let controller: InvoiceChildController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvoiceChildController],
      providers: [InvoiceChildService],
    }).compile();

    controller = module.get<InvoiceChildController>(InvoiceChildController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
