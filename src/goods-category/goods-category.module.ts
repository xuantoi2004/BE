import { Module } from '@nestjs/common';
import { GoodsCategoryService } from './goods-category.service';
import { GoodsCategoryController } from './goods-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from 'src/suppliers/entities/supplier.entity';
import { GoodsCategory } from './entities/goods-category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Supplier, GoodsCategory
    ])
  ],
  controllers: [GoodsCategoryController],
  providers: [GoodsCategoryService],
})
export class GoodsCategoryModule {}
