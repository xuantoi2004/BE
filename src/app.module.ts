import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentModule } from './payment/payment.module';
import { CategoryModule } from './category/category.module';
import { ShippersModule } from './shippers/shippers.module';
import { OrderdetailsModule } from './orderdetails/orderdetails.module';
import { ProductsModule } from './products/products.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { DatabaseModule } from './database/database.module';
import { ProductdetailsModule } from './productdetails/productdetails.module';
import { GoodsCategoryModule } from './goods-category/goods-category.module';
import { ConfigModule } from './config/config.module'
import { ProductpropsModule } from './productprops/productprops.module';
import { CommonModule } from './common/common.module';
import { InvoiceModule } from './invoice/invoice.module';
import { InvoiceChildModule } from './invoice_child/invoice_child.module';

@Module({
  imports: [ConfigModule, CustomersModule, OrdersModule, PaymentModule, CategoryModule, ShippersModule, OrderdetailsModule, ProductsModule, SuppliersModule, DatabaseModule, ProductdetailsModule, GoodsCategoryModule, ProductpropsModule, CommonModule, InvoiceModule, InvoiceChildModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
