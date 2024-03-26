import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Invoice } from './entities/invoice.entity';
import { InvoiceChild } from 'src/invoice_child/entities/invoice_child.entity';
import { Customer } from 'src/customers/entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Invoice, InvoiceChild, Customer])],
  controllers: [InvoiceController],
  providers: [InvoiceService],
})
export class InvoiceModule {}
