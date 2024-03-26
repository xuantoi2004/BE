import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InvoiceChildDto, createCheckoutDto } from './dto/create-checkout.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice, InvoiceStatus } from './entities/invoice.entity';
import { Repository } from 'typeorm';
import { InvoiceChild } from 'src/invoice_child/entities/invoice_child.entity';
import { Product } from 'src/products/entities/product.entity';
import { Customer } from 'src/customers/entities/customer.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
    @InjectRepository(InvoiceChild)
    private readonly invoiceChildRepository: Repository<InvoiceChild>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ) {}

  create(createInvoiceDto: CreateInvoiceDto) {
    return 'This action adds a new invoice';
  }

  async approve(id: number) {
    const invoice = await this.invoiceRepository.findOne({
      where: {id},
      relations: ['invoiceChild', 'invoiceChild.product']
    })
    invoice.status = InvoiceStatus.APPROVE;

    for(const ivc of invoice.invoiceChild) {
      const product = await this.productRepository.findOne({
        where: {
          id: ivc.product.id
        }
      })

      product.qty-=ivc.qty;

      await this.productRepository.save(product);
    }

    return await this.invoiceRepository.save(invoice);
  }

  async reject(id: number) {
    const invoice = await this.invoiceRepository.findOne({
      where: {id}
    })
    
    invoice.status = InvoiceStatus.REJECT;

    return await this.invoiceRepository.save(invoice);
  }

  async createCheckout(createCheckoutDto: createCheckoutDto) {
    const customer = await this.customerRepository.findOne({
      where: {
        id: +createCheckoutDto.customerId
      }
    })

    const invoice = this.invoiceRepository.create();
    invoice.full_name = createCheckoutDto.full_name;
    invoice.phone = createCheckoutDto.phone;
    invoice.nation = createCheckoutDto.nation;
    invoice.city = createCheckoutDto.city;
    invoice.district = createCheckoutDto.district;
    invoice.address = createCheckoutDto.address;
    invoice.shipping = +createCheckoutDto.shipping;
    invoice.payment = +createCheckoutDto.payment;
    invoice.total = +createCheckoutDto.total;
    invoice.customer = customer;

    await this.invoiceRepository.save(invoice);

    for(const ivc of createCheckoutDto.invoice_childs) {
      const product = await this.productRepository.findOne({
        where: {id: +ivc.productId}
      })
      const child = this.invoiceChildRepository.create();
      child.invoice = invoice;
      child.product = product;
      child.qty = +ivc.qty;
      child.total = +ivc.total;
      await this.invoiceChildRepository.save(child);
    }

    return await this.invoiceRepository.findOne({
      where: {
        id: invoice.id
      },
      relations: {
        invoiceChild: true
      }
    });

  }

  async findAll(queryFilter?: any) {
    const queryOptions: any = {
      order: {
        id: 'DESC'
      },
      relations: ['customer', 'invoiceChild', 'invoiceChild.product'],
    };

    if (queryFilter !== undefined) {
      if (queryFilter.customerId) {
        queryOptions.where = {
          customer: {
            id: queryFilter.customerId,
          },
        };
      }
      if (queryFilter.limit) {
        queryOptions.take = queryFilter.limit;
      }
    }

    return await this.invoiceRepository.find(queryOptions);
  }

  async findOne(id: number) {
    const invoice = await this.invoiceRepository.findOne({
      where: {
        id
      },
      relations: ['customer', 'invoiceChild', 'invoiceChild.product'],
    })

    return invoice;
  }

  async update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    const invoice = await this.invoiceRepository.findOne({
      where: {id}
    })

    invoice.full_name = updateInvoiceDto.full_name;
    invoice.nation = updateInvoiceDto.nation;
    invoice.city = updateInvoiceDto.city;
    invoice.district = updateInvoiceDto.district;
    invoice.address = updateInvoiceDto.address;
    invoice.phone = updateInvoiceDto.phone;
    invoice.shipping = JSON.parse(updateInvoiceDto.shipping);
    invoice.payment = JSON.parse(updateInvoiceDto.payment);

    return await this.invoiceRepository.save(invoice);
  }

  async remove(id: number) {
    const invoice = await this.invoiceRepository.findOne({
      where: {
        id
      }
    })

    const status = invoice.status;
    if(status == InvoiceStatus.PENDING)
      throw new BadRequestException('Hóa đơn chưa được xử lý');
    else
      return await this.invoiceRepository.softRemove(invoice);
    
  }
}
