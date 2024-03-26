import { Module } from '@nestjs/common';
import { InvoiceChildService } from './invoice_child.service';
import { InvoiceChildController } from './invoice_child.controller';

@Module({
  controllers: [InvoiceChildController],
  providers: [InvoiceChildService],
})
export class InvoiceChildModule {}
