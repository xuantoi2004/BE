import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvoiceChildService } from './invoice_child.service';
import { CreateInvoiceChildDto } from './dto/create-invoice_child.dto';
import { UpdateInvoiceChildDto } from './dto/update-invoice_child.dto';

@Controller('invoice-child')
export class InvoiceChildController {
  constructor(private readonly invoiceChildService: InvoiceChildService) {}

  @Post()
  create(@Body() createInvoiceChildDto: CreateInvoiceChildDto) {
    return this.invoiceChildService.create(createInvoiceChildDto);
  }

  @Get()
  findAll() {
    return this.invoiceChildService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoiceChildService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvoiceChildDto: UpdateInvoiceChildDto) {
    return this.invoiceChildService.update(+id, updateInvoiceChildDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invoiceChildService.remove(+id);
  }
}
