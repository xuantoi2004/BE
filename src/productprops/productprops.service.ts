import { Injectable } from '@nestjs/common';
import { CreateProductpropDto } from './dto/create-productprop.dto';
import { UpdateProductpropDto } from './dto/update-productprop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Productprop } from './entities/productprop.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class ProductpropsService {
  constructor(
    @InjectRepository(Productprop)
    private readonly productPropRepository: Repository<Productprop>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  async create(createProductpropDto: CreateProductpropDto) {
    const product = await this.productRepository.findOne({
      where: {
        id: +createProductpropDto.productId
      }
    })

    const prodProp = this.productPropRepository.create();
    prodProp.nameProp = createProductpropDto.nameProp;
    prodProp.valueProp = createProductpropDto.valueProp;
    prodProp.product = product;

    return await this.productPropRepository.save(prodProp);
  }

  async findAll(productQuery?: any) {
    const queryOptions: any = {
      order: {
        id: 'ASC',
      },
    };

    if (productQuery !== undefined) {
      queryOptions.where = {
        product: {
          id: productQuery.product
        }
      };
      if (productQuery.limit) {
        queryOptions.take = productQuery.limit;
      }
    }

    const prodProps = await this.productPropRepository.find(queryOptions);

    return prodProps;
  }

  findOne(id: number) {
    return `This action returns a #${id} productprop`;
  }

  update(id: number, updateProductpropDto: UpdateProductpropDto) {
    return `This action updates a #${id} productprop`;
  }

  remove(id: number) {
    return `This action removes a #${id} productprop`;
  }
}
