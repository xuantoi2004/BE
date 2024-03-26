import CustomBaseEntity from "src/database/entities/base.entity";
import { Order } from "src/orders/entities/order.entity";
import { Product } from "src/products/entities/product.entity";
import { Shipper } from "src/shippers/entities/shipper.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Orderdetail extends CustomBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number; //số lượng

    @Column()
    finalPrice: number; //giá sau khi đã dùng discount

    @Column()
    finalTotalPrice: number; //tổng giá cuối

    @Column()
    billDate: Date;

    @Column()
    shipDate: Date;

    @Column({
        default: false
    })
    fulfilled: boolean;

    @ManyToOne(() => Order, (order) => order.orderDetails)
    @JoinColumn()
    order: Order

    @OneToOne(() => Shipper)
    @JoinColumn()
    shipper: Shipper

    @OneToOne(() => Product)
    @JoinColumn()
    product: Product
}
