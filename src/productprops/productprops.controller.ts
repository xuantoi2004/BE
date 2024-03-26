import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductpropsService } from './productprops.service';
import { CreateProductpropDto } from './dto/create-productprop.dto';
import { UpdateProductpropDto } from './dto/update-productprop.dto';

@Controller('productprops')
export class ProductpropsController {
  constructor(private readonly productpropsService: ProductpropsService) {}

  @Post()
  async create(@Body() createProductpropDto: CreateProductpropDto) {
    const prodProp = await this.productpropsService.create(createProductpropDto);

    return {
      result: prodProp,
      status: 'success'
    }
  }

  @Get()
  async findAll(@Query() productQuery: object) {
    const prodProps = await this.productpropsService.findAll(productQuery);
    return {
      result: prodProps,
      status: 'success'
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productpropsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductpropDto: UpdateProductpropDto) {
    return this.productpropsService.update(+id, updateProductpropDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productpropsService.remove(+id);
  }
}
