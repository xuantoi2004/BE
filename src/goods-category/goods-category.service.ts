import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateGoodsCategoryDto } from './dto/create-goods-category.dto';
import { UpdateGoodsCategoryDto } from './dto/update-goods-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GoodsCategory } from './entities/goods-category.entity';
import { Repository } from 'typeorm';
import { Supplier } from 'src/suppliers/entities/supplier.entity';

@Injectable()
export class GoodsCategoryService {
  constructor(
    @InjectRepository(GoodsCategory)
    private goodCategoryRepository: Repository<GoodsCategory>,
    @InjectRepository(Supplier)
    private suppRepository: Repository<Supplier>
  ) { }

  async create(createGoodsCategoryDto: CreateGoodsCategoryDto) {
    try {
      const goodCate = this.goodCategoryRepository.create();

      goodCate.goodName = createGoodsCategoryDto.good_name;
      goodCate.description = createGoodsCategoryDto.description;
      goodCate.picture = createGoodsCategoryDto.picture;

      return await goodCate.save()
    } catch (error) {
      throw new BadRequestException(error)
    }

  }

  async findAll() {
    const goodCates = await this.goodCategoryRepository.find({
      order: {
        id: 'DESC'
      }
    });

    return goodCates;
  }

  async findOne(id: number) {
    return await this.goodCategoryRepository.findOne({
      where: {
        id
      }
    })
  }

  async update(id: number, updateGoodsCategoryDto: UpdateGoodsCategoryDto) {
    const goodCate = await this.goodCategoryRepository.findOne({
      where: {
        id
      }
    })

    goodCate.goodName = updateGoodsCategoryDto.good_name;
    goodCate.description = updateGoodsCategoryDto.description;
    goodCate.picture = updateGoodsCategoryDto.picture;

    return await this.goodCategoryRepository.save(goodCate);
  }

  async remove(id: number) {
    try {
      const goodCate = await this.goodCategoryRepository.findOneOrFail({
        where: {id}
      });
      return await this.goodCategoryRepository.remove(goodCate)
    } catch (error) {
      throw new BadRequestException(error)
    }
  }
}
