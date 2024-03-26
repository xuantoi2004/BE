import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GoodsCategoryService } from './goods-category.service';
import { CreateGoodsCategoryDto } from './dto/create-goods-category.dto';
import { UpdateGoodsCategoryDto } from './dto/update-goods-category.dto';

@Controller('goods-category')
export class GoodsCategoryController {
  constructor(private readonly goodsCategoryService: GoodsCategoryService) {}

  @Post()
  async create(@Body() createGoodsCategoryDto: CreateGoodsCategoryDto) {
    const goodCate = await this.goodsCategoryService.create(createGoodsCategoryDto);
    return {
      result: goodCate,
      status: 'success'
    }
  }

  @Get()
  async findAll() {
    const goodCates = await this.goodsCategoryService.findAll();
    return {
      result: goodCates,
      status: 'success'
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const goodCate = await this.goodsCategoryService.findOne(+id);

    return {
      result: goodCate,
      status: 'success'
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGoodsCategoryDto: UpdateGoodsCategoryDto) {
    const goodCate = await this.goodsCategoryService.update(+id, updateGoodsCategoryDto);
    
    return {
      result: goodCate,
      status: 'success'
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const goodCate = await this.goodsCategoryService.remove(+id);

    return {
      status: 'success',
      result: goodCate,
      message: 'Remove successfully'
    }
  }
}
