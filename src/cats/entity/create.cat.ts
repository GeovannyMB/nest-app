import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreateCat {
    @PrimaryGeneratedColumn()
    id: string;
    name: string;
    age: number;
}