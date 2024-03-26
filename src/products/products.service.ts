import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Supplier } from 'src/suppliers/entities/supplier.entity';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}

  async create(createProductDto: CreateProductDto) {
    const supplier = await this.supplierRepository.findOne({
      where: {
        id: createProductDto.supplier_id
      }
    })

    const category = await this.categoryRepository.findOne({
      where: {
        id: createProductDto.category_id
      }
    })

    const product = this.productRepository.create();
    product.name = createProductDto.name;
    product.description = createProductDto.description;
    product.picture = createProductDto.picture;
    product.price = createProductDto.price;
    product.discount = createProductDto.discount;
    product.discountAvailable = JSON.parse(createProductDto.discount_available);
    product.productAvailable = JSON.parse(createProductDto.product_available);
    product.isFlashsale = JSON.parse(createProductDto.is_flashsale);
    product.isTrending = JSON.parse(createProductDto.is_trending);
    product.qty = +createProductDto.qty;
    product.category = category;
    product.supplier = supplier;
    
    return await this.productRepository.save(product);
  }

  async findAll(queryFilter?: any) {
    const queryOptions: any = {
      order: {
        id: 'DESC'
      },
      relations: ['category', 'supplier'],
    };

    if (queryFilter !== undefined) {
      if (queryFilter.categoryId) {
        queryOptions.where = {
          category: {
            id: queryFilter.categoryId,
          },
        };
      }
      if (queryFilter.goodCateId) {
        queryOptions.where = {
          category: {
            goodCategory: {
              id: queryFilter.goodCateId
            },
          },
        };
      }
      if (queryFilter.flashsale) {
        if (!queryOptions.where) {
          queryOptions.where = {};
        }
        queryOptions.where.isFlashsale = true;
      }
      if (queryFilter.trending) {
        if (!queryOptions.where) {
          queryOptions.where = {};
        }
        queryOptions.where.isTrending = true;
      }
      if (queryFilter.limit) {
        queryOptions.take = queryFilter.limit;
      }
    }

    return await this.productRepository.find(queryOptions);
  }

  async findOne(id: number) {
    return await this.productRepository.findOne({
      where: {
        id
      },
      relations: ['supplier','category','category.goodCategory'],
      
    })
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const supplier = await this.supplierRepository.findOne({
      where: {
        id: updateProductDto.supplier_id,
      }
    })

    const category = await this.categoryRepository.findOne({
      where: {
        id: updateProductDto.category_id
      }
    })

    const product = await this.productRepository.findOne({
      where: {
        id
      }
    });
    product.name = updateProductDto.name;
    product.description = updateProductDto.description;
    product.picture = updateProductDto.picture;
    product.price = updateProductDto.price;
    product.discount = updateProductDto.discount;
    product.discountAvailable = JSON.parse(updateProductDto.discount_available);
    product.productAvailable = JSON.parse(updateProductDto.product_available);
    product.supplier = supplier;
    product.category = category;
    product.isFlashsale = JSON.parse(updateProductDto.is_flashsale);
    product.isTrending = JSON.parse(updateProductDto.is_trending);
    product.qty = +updateProductDto.qty;
    
    return await this.productRepository.save(product);
  }

  async remove(id: number) {
    const product = await this.productRepository.findOne({
      where: {
        id
      }
    })

    return await this.productRepository.softRemove(product);
  }
}
