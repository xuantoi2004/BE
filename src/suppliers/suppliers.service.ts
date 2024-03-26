import { BadRequestException, Catch, HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { Repository } from 'typeorm';
import { QueryFailedFilter } from 'src/common/exceptions/query.filter';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier)
    private supplierRepository: Repository<Supplier>
  ) { }

  async create(createSupplierDto: CreateSupplierDto) {
    const {
      postal_code,
      active,
      ranking,
      ...supplierObj
    } = createSupplierDto;
    const supplier = this.supplierRepository.create({
      ...supplierObj,
      postalCode: postal_code,
      active: !!active,
      ranking: +ranking
    });

    return this.supplierRepository.save(supplier);
  }

  async findAll() {
    try {
      const supplierArr = await this.supplierRepository.find();

      return supplierArr
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async findOne(id: number) {
    try {
      const supplier = await this.supplierRepository.findOne({
        where: {
          id
        }
      });

      return supplier
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    const supplier = await this.supplierRepository.findOne({
      where: {
        id
      }
    })

    if (!supplier) {
      throw new NotFoundException('Supplier not found');
    }

    supplier.name = updateSupplierDto.name;
    supplier.description = updateSupplierDto.description;
    supplier.phone = updateSupplierDto.phone;
    supplier.email = updateSupplierDto.email;
    supplier.address = updateSupplierDto.address;
    supplier.city = updateSupplierDto.city;
    supplier.country = updateSupplierDto.country;
    supplier.postalCode = updateSupplierDto.postal_code;
    supplier.url = updateSupplierDto.url;
    supplier.logo = updateSupplierDto.logo;
    supplier.ranking = +updateSupplierDto.ranking;
    supplier.active = !!updateSupplierDto.active;

    return this.supplierRepository.save(supplier);

  }

  async remove(id: number) {
    try {
      const supplier = await this.supplierRepository.findOne({
        where: {
          id
        }
      })

      return await this.supplierRepository.remove(supplier);
    } catch (error) {
      throw new BadRequestException(error)
    }
  }
}
