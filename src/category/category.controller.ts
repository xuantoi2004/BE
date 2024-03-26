import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    const category = await this.categoryService.create(createCategoryDto);
    return {
      result: category,
      status: 'success'
    }
  }

  @Get()
  async findAll(@Query() queryFilter: any) {
    const categories = await this.categoryService.findAll(queryFilter);
    return {
      result: categories,
      status: 'success'
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Query() query: any) {
    const category = await this.categoryService.findOne(+id, query);
    return {
      result: category,
      status: 'success'
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryService.update(+id, updateCategoryDto);
    return {
      result: category,
      status: 'success'
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const category = await this.categoryService.remove(+id);
    return {
      result: category,
      status: 'success'
    }
  }
}
