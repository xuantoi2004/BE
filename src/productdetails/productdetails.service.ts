import { Injectable } from '@nestjs/common';
import { CreateProductdetailDto } from './dto/create-productdetail.dto';
import { UpdateProductdetailDto } from './dto/update-productdetail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Productdetail } from './entities/productdetail.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class ProductdetailsService {
  constructor(
    @InjectRepository(Productdetail)
    private readonly prodDetailRepository: Repository<Productdetail>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  async create(createProductdetailDto: CreateProductdetailDto) {
    const product = await this.productRepository.findOne({
      where: {
        id: +createProductdetailDto.productId
      }
    })

    const prodDetail = this.prodDetailRepository.create();
    prodDetail.picture = createProductdetailDto.picture;
    prodDetail.product = product;

    return await this.prodDetailRepository.save(prodDetail);
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
    }

    const prodDetails = await this.prodDetailRepository.find(queryOptions);

    return prodDetails;
  }

  async findOne(id: number) {
    return await this.prodDetailRepository.findOne({
      where: {
        id
      }
    })
  }

  async update(id: number, updateProductdetailDto: UpdateProductdetailDto) {
    const product = await this.productRepository.findOne({
      where: {
        id: +updateProductdetailDto.productId
      }
    })

    const prodDetail = await this.prodDetailRepository.findOne({
      where: {
        id
      }
    })

    prodDetail.picture = updateProductdetailDto.picture;
    prodDetail.product = product;

    return await this.prodDetailRepository.save(prodDetail);

  }

  remove(id: number) {
    return `This action removes a #${id} productdetail`;
  }
}
