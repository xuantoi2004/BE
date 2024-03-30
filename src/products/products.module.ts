import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Supplier } from 'src/suppliers/entities/supplier.entity';
import { Category } from 'src/category/entities/category.entity';
import { MulterModule } from '@nestjs/platform-express';
import { FileModule } from 'file/file.module';
import { FileUtil } from 'file/file.util';
import { diskStorage } from 'multer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Supplier, Category]),
    MulterModule.registerAsync({
      imports: [FileModule],
      useFactory: (fileUtil: FileUtil) => ({
        fileFilter: fileUtil.validateImageFile,
        storage: diskStorage({
          destination: 'upload',
          filename: fileUtil.editFileName
        })
      }),
      inject: [FileUtil]
    })
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
