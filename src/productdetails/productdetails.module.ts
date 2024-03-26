import { Module } from '@nestjs/common';
import { ProductdetailsService } from './productdetails.service';
import { ProductdetailsController } from './productdetails.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Productdetail } from './entities/productdetail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      Productdetail
    ])
  ],
  controllers: [ProductdetailsController],
  providers: [ProductdetailsService],
})
export class ProductdetailsModule {}
