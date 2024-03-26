import { Category } from "src/category/entities/category.entity";
import CustomBaseEntity from "src/database/entities/base.entity";
import { Supplier } from "src/suppliers/entities/supplier.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GoodsCategory extends CustomBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    goodName: string;

    @Column()
    description: string;

    @Column({
        length: 255
    })
    picture: string;

    @OneToMany(() => Category, (category) => category.goodCategory)
    @JoinColumn()
    categories: Category[]

    // @ManyToOne(() => Supplier, (supplier) => supplier.goodCategories)
    // @JoinColumn()
    // supplier: Supplier
}
