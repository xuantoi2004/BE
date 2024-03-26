import { Category } from "src/category/entities/category.entity";
import CustomBaseEntity from "src/database/entities/base.entity";
import { InvoiceChild } from "src/invoice_child/entities/invoice_child.entity";
import { Productdetail } from "src/productdetails/entities/productdetail.entity";
import { Productprop } from "src/productprops/entities/productprop.entity";
import { Supplier } from "src/suppliers/entities/supplier.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends CustomBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 60
    })
    name: string;

    @Column({
        length: 255
    })
    description: string;

    @Column()
    picture: string;

    @Column()
    price: number;

    @Column()
    discount: number;

    @Column({
        default: false
    })
    discountAvailable: boolean;

    @Column({
        default: 0
    })
    qty: number;

    @Column({
        default: true
    })
    productAvailable: boolean;

    @Column({
        default: false,
        type: Boolean
    })
    isFlashsale: boolean;

    @Column({
        default: false,
        type: Boolean
    })
    isTrending: boolean;

    @ManyToOne(() => Supplier, (supplier) => supplier.products)
    @JoinColumn()
    supplier: Supplier;

    @Column()
    supplierId: number;

    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn()
    category: Category;

    @Column()
    categoryId: number;

    @OneToMany(() => Productdetail, (productdetail) => productdetail.product)
    @JoinColumn()
    productdetails: Productdetail[]

    @OneToMany(() => Productprop, (productprop) => productprop.product)
    @JoinColumn()
    productprops: Productprop[]

    @OneToMany(() => InvoiceChild, (invoiceChild) => invoiceChild.product)
    invoiceChild: InvoiceChild[];
}
