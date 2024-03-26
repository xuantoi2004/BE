import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductdetailsService } from './productdetails.service';
import { CreateProductdetailDto } from './dto/create-productdetail.dto';
import { UpdateProductdetailDto } from './dto/update-productdetail.dto';

@Controller('productdetails')
export class ProductdetailsController {
  constructor(private readonly productdetailsService: ProductdetailsService) {}

  @Post()
  async create(@Body() createProductdetailDto: CreateProductdetailDto) {
    const prodDetail = await this.productdetailsService.create(createProductdetailDto);
    return {
      result: prodDetail,
      status: 'success'
    }
  }

  @Get()
  async findAll(@Query() productQuery: object) {
    const prodDetails = await this.productdetailsService.findAll(productQuery);
    return {
      result: prodDetails,
      status: 'success'
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const prodDetail = await this.productdetailsService.findOne(+id);

    return {
      result: prodDetail,
      status: 'success'
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductdetailDto: UpdateProductdetailDto) {
    const prodDetail = await this.productdetailsService.update(+id, updateProductdetailDto);

    return {
      result: prodDetail,
      status: 'success'
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productdetailsService.remove(+id);
  }
}
