import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sindan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  createdAt: string;

  @Column()
  height: number;

  @Column()
  emoji: string;

  @Column()
  unit: string;
}
