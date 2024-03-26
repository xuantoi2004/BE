import CustomBaseEntity from "src/database/entities/base.entity";
import { Invoice } from "src/invoice/entities/invoice.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InvoiceChild extends CustomBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, (product) => product.invoiceChild)
    @JoinColumn()
    product: Product;

    @Column({
        default: 1
    })
    qty: number;

    @Column()
    total: number;

    @ManyToOne(() => Invoice, (invoice) =>invoice.invoiceChild)
    @JoinColumn()
    invoice: Invoice;
}
