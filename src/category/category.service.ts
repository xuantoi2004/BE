import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { GoodsCategory } from 'src/goods-category/entities/goods-category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(GoodsCategory)
    private readonly goodCateRepository: Repository<GoodsCategory>
  ) { }

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const goodCate = await this.goodCateRepository.findOne({
        where: {
          id: createCategoryDto.goodCateId
        }
      })

      const category = this.categoryRepository.create();
      category.categoryName = createCategoryDto.categoryName;
      category.description = createCategoryDto.description;
      category.picture = createCategoryDto.picture;
      category.active = !!createCategoryDto.active;
      category.goodCategory = goodCate;

      const savedCategory = await this.categoryRepository.save(category);

      // Load the relation explicitly
      const categoryWithRelation = await this.categoryRepository.findOne(
        {
          where: {
            id: savedCategory.id
          },
          relations: {
            goodCategory: true
          }
        }
      );

      return categoryWithRelation;

    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async findAll(queryFilter?: any) {
    const queryOptions: any = {
      order: {
        id: 'DESC'
      },
      relations: {
        goodCategory: true
      },
    }

    if(queryFilter !== undefined) {
      queryOptions.where = {
        goodCategory: {
          id: queryFilter.goodCateId
        }
      }
    }

    return await this.categoryRepository.find(queryOptions)
  }

  async findOne(id: number, query?: any) {
    return await this.categoryRepository.findOne({
      where: {
        id
      },
      relations: {
        goodCategory: true
      }
    })
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      const category = await this.categoryRepository.findOne({
        where: {
          id
        }
      });

      const goodCate = await this.goodCateRepository.findOne({
        where: {
          id: updateCategoryDto.goodCateId
        }
      })

      category.categoryName = updateCategoryDto.categoryName;
      category.description = updateCategoryDto.description;
      category.picture = updateCategoryDto.picture;
      category.active = JSON.parse(updateCategoryDto.active);
      category.goodCategory = goodCate;

      return await this.categoryRepository.save(category);
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async remove(id: number) {
    const category = await this.categoryRepository.findOne({
      where: {
        id
      }
    })

    return await this.categoryRepository.remove(category);
  }
}
