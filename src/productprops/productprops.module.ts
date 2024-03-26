import { Module } from '@nestjs/common';
import { ProductpropsService } from './productprops.service';
import { ProductpropsController } from './productprops.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productprop } from './entities/productprop.entity';
import { Product } from 'src/products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Productprop,
      Product
    ])
  ],
  controllers: [ProductpropsController],
  providers: [ProductpropsService],
})
export class ProductpropsModule {}
