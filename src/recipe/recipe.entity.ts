// Entity/table for Recipe data
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    cuisine: string;

    @Column()
    ingredients: string[];

    @Column()
    cookingTime: number;

    @Column()
    instructions: string;
}