import { Controller, Get, Post, Body, Patch, Param, Delete, Catch, UseFilters } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { QueryFailedFilter } from 'src/common/exceptions/query.filter';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  async create(@Body() createSupplierDto: CreateSupplierDto) {
    const supplier = await this.suppliersService.create(createSupplierDto);

    return {
      result: supplier,
      status: 'success'
    }
  }

  @Get()
  async findAll() {
    const supplier = await this.suppliersService.findAll();

    return {
      result: supplier,
      status: 'success'
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const supplier = await this.suppliersService.findOne(+id);
    return {
      result: supplier,
      status: 'success'
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSupplierDto: UpdateSupplierDto) {
    const supplier = await this.suppliersService.update(+id, updateSupplierDto);
    return {
      result: supplier,
      status: 'success'
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const supplier = await this.suppliersService.remove(+id);

    return {
      result: supplier,
      status: 'success',
      message: 'Remove successfully'
    }
  }
}
