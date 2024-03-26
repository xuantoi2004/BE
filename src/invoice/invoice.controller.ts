import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { createCheckoutDto } from './dto/create-checkout.dto';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}


  @Post('/checkout')
  async createCheckout(@Body() createCheckoutDto: createCheckoutDto) {
    const invoice = await this.invoiceService.createCheckout(createCheckoutDto);
    return {
      result: invoice,
      status: 'success'
    }
  }

  @Post()
  create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceService.create(createInvoiceDto);
  }

  @Get()
  async findAll(@Query() queryFilter: any) {
    const invoices = await this.invoiceService.findAll(queryFilter);
    return {
      result: invoices,
      status: 'success'
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const invoice = await this.invoiceService.findOne(+id);

    return {
      result: invoice,
      status: 'success'
    }
  }

  @Patch('/approve/:id')
  async approveInvoice(@Param('id') id: number) {
    const invoice = await this.invoiceService.approve(id);

    return {
      result: invoice,
      status: 'success'
    }
  }

  @Patch('/reject/:id')
  async rejectInvoice(@Param('id') id: number) {
    const invoice = await this.invoiceService.reject(id);

    return {
      result: invoice,
      status: 'success'
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {
    const invoice = await this.invoiceService.update(+id, updateInvoiceDto);

    return {
      result: invoice,
      status: 'success'
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const invoice = await this.invoiceService.remove(+id);
    return {
      result: invoice,
      status: 'success'
    }
  }
}
