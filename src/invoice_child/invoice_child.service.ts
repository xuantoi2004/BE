import { Injectable } from '@nestjs/common';
import { CreateInvoiceChildDto } from './dto/create-invoice_child.dto';
import { UpdateInvoiceChildDto } from './dto/update-invoice_child.dto';

@Injectable()
export class InvoiceChildService {
  create(createInvoiceChildDto: CreateInvoiceChildDto) {
    return 'This action adds a new invoiceChild';
  }

  findAll() {
    return `This action returns all invoiceChild`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceChild`;
  }

  update(id: number, updateInvoiceChildDto: UpdateInvoiceChildDto) {
    return `This action updates a #${id} invoiceChild`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceChild`;
  }
}
