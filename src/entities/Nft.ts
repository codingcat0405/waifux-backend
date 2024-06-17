import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
class Nft {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  image!: string;

  @Column()
  tokenId!: number

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

export default Nft