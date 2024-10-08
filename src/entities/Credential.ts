import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "credentials" })
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        default: 'default_password' // Cambia este valor por algo más apropiado para tu caso
      })
      password: string;
      
}
