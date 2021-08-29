import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("products")
export class Products {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productName: string;

    @Column()
    price: number;

    @Column()
    quantity: number;

};
