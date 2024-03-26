import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { LoginCustomerDto } from './dto/login-customer.dto';
import { CreateFullCustomerDto } from './dto/create-full-customer.dto';
import { UpdateFullCustomerDto } from './dto/update-full-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ) { }

  async create(createCustomerDto: CreateFullCustomerDto) {
    const customer = this.customerRepository.create();
    customer.firstName = createCustomerDto.firstName;
    customer.lastName = createCustomerDto.lastName;
    customer.phone = createCustomerDto.phone;
    customer.email = createCustomerDto.email;
    customer.jcoin = +createCustomerDto.jcoin;
    customer.avatar = createCustomerDto.avatar;
    customer.gender = JSON.parse(createCustomerDto.gender);
    customer.password = createCustomerDto.password;
    customer.active = JSON.parse(createCustomerDto.active);
    customer.isAdmin = JSON.parse(createCustomerDto.isAdmin);
    customer.nation1 = createCustomerDto.nation1;
    customer.city1 = createCustomerDto.city1;
    customer.district1 = createCustomerDto.district1;
    customer.address1 = createCustomerDto.address1;
    customer.nation2 = createCustomerDto.nation2;
    customer.city2 = createCustomerDto.city2;
    customer.district2 = createCustomerDto.district2;
    customer.address2 = createCustomerDto.address2;

    return await this.customerRepository.save(customer);
  }

  async signup(createCustomerDto: CreateCustomerDto) {
    const customer = this.customerRepository.create();
    customer.email = createCustomerDto.email;
    customer.password = createCustomerDto.password;
    customer.phone = createCustomerDto.phone;

    customer.firstName = createCustomerDto.email.split('@')[0];

    return await this.customerRepository.save(customer)

  }

  async signin(loginBody: LoginCustomerDto) {
    const customer = await this.customerRepository.findOne({
      where: [
        { phone: loginBody.username },
        { email: loginBody.username }
      ]
    })

    const password = loginBody.password;

    if (!customer) {
      return null
    } else {
      if (password == customer.password) {
        return customer;
      } else {
        return null
      }
    }
  }

  async findAll() {
    const customers = await this.customerRepository.find();

    return customers;
  }

  async findOne(id: number) {
    const customer = await this.customerRepository.findOne({
      where: {
        id
      }
    })

    return customer;
  }

  async updateFull(id: number, updateCustomerDto: UpdateFullCustomerDto) {
    const customer = await this.customerRepository.findOne({
      where: {id}
    })

    customer.firstName = updateCustomerDto.firstName;
    customer.lastName = updateCustomerDto.lastName;
    customer.phone = updateCustomerDto.phone;
    customer.email = updateCustomerDto.email;
    customer.jcoin = +updateCustomerDto.jcoin;
    customer.avatar = updateCustomerDto.avatar;
    customer.gender = JSON.parse(updateCustomerDto.gender);
    customer.active = JSON.parse(updateCustomerDto.active);
    customer.isAdmin = JSON.parse(updateCustomerDto.isAdmin);
    customer.nation1 = updateCustomerDto.nation1;
    customer.city1 = updateCustomerDto.city1;
    customer.district1 = updateCustomerDto.district1;
    customer.address1 = updateCustomerDto.address1;
    customer.nation2 = updateCustomerDto.nation2;
    customer.city2 = updateCustomerDto.city2;
    customer.district2 = updateCustomerDto.district2;
    customer.address2 = updateCustomerDto.address2;

    return await this.customerRepository.save(customer);

  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customerRepository.findOne({
      where: {
        id
      }
    })

    customer.firstName = updateCustomerDto.firstName;
    customer.lastName = updateCustomerDto.lastName;
    customer.nation1 = updateCustomerDto.nation1;
    customer.city1 = updateCustomerDto.city1;
    customer.district1 = updateCustomerDto.district1;
    customer.nation2 = updateCustomerDto.nation2;
    customer.city2 = updateCustomerDto.city2;
    customer.district2 = updateCustomerDto.district2;
    customer.address1 = updateCustomerDto.address1;
    customer.address2 = updateCustomerDto.address2;
    customer.phone = updateCustomerDto.phone;
    customer.email = updateCustomerDto.email;
    customer.avatar = updateCustomerDto.avatar;
    customer.gender = !!updateCustomerDto.gender;
    customer.password = updateCustomerDto.password;

    return await this.customerRepository.save(customer);
  }

  async remove(id: number) {
    const customer = await this.customerRepository.findOne({
      where: {id}
    })

    return await this.customerRepository.softRemove(customer);
  }
}
