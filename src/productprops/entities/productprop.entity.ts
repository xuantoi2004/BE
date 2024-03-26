import CustomBaseEntity from "src/database/entities/base.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Productprop extends CustomBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameProp: string;

    @Column()
    valueProp: string;

    @ManyToOne(() => Product, (product) => product.productprops)
    @JoinColumn()
    product: Product;
}
