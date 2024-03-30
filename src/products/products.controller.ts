import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UploadedFile, UseInterceptors, HttpStatus, HttpCode, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.productsService.create(createProductDto);

    return {
      result: product,
      status: 'success'
    }
  }

  @Get()
  async findAll(@Query() queryFilter: any) {
    const products = await this.productsService.findAll(queryFilter);
    return {
      result: products,
      status: 'success'
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productsService.findOne(+id);
    return {
      result: product,
      status: 'success'
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const product = await this.productsService.update(+id, updateProductDto);
    return {
      result: product,
      status: 'success'
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const product = await this.productsService.remove(+id);

    return {
      result: product,
      status: 'success'
    }
  }

  @UseInterceptors(FileInterceptor('image'))
  @HttpCode(HttpStatus.OK)
  @Post('upload')
  uploadImageProduct(
    @UploadedFile() image: Express.Multer.File
  ) {
    return {
      result: image.filename,
      status: 'success'
    }
  }

  @Get('image/:filename')
  async serveAvatar(@Param('filename') fileName, @Res() res): Promise<any> {
    res.sendFile(fileName, { root: 'upload'});
  }
}
