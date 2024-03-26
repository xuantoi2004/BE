import { Customer } from "src/customers/entities/customer.entity";
import CustomBaseEntity from "src/database/entities/base.entity";
import { GoodsCategory } from "src/goods-category/entities/goods-category.entity";
import { Payment } from "src/payment/entities/payment.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Supplier extends CustomBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        length: 1000
    })
    description: string;

    @Column({
        length: 60
    })
    address: string;

    @Column({
        length: 25,
        unique: true
    })
    phone: string;

    @Column({
        length: 15
    })
    city: string;

    @Column({
        length: 50
    })
    country: string;

    @Column({
        length: 15
    })
    postalCode: string;

    @Column({
        length: 75,
        unique: true
    })
    email: string;

    @Column({
        length: 100
    })
    url: string;

    @Column({
        length: 75
    })
    logo: string;

    @Column()
    ranking: number;

    @Column({
        default: true
    })
    active: boolean;

    @OneToMany(() => Product, (product) => product.supplier)
    @JoinColumn()
    products: Product[]

    @OneToOne(() => Customer)
    @JoinColumn()
    customer: Customer;

    @OneToMany(() => Payment, (payment) => payment.supplier)
    @JoinColumn()
    payments: Payment[];
}
