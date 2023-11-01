import { Column,Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './User';

@Entity()
export class InformationsForCalcule {
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column()
    numeroDoProcesso: string
    @Column()
    nome: string
    @Column()
    dataAjuizamento: string
    @Column()
    cpf: string
    @Column()
    dibInicial: string
    @Column()
    dibFinal?: string
    @Column()
    rmi: string
    @Column()
    beneficio: string
    @Column()
    nb: string
    @Column()
    dip: string
    @Column({nullable: true})
    aps?: string
    @Column({nullable: true})
    citacao?: string
    @Column("text", { array: true, nullable: true})
    beneficiosAcumulados?: string[]
    @Column()
    urlProcesso: string
    @Column()
    dibAnterior: string
    @Column()
    beneficioAcumuladoBoolean: boolean
    @Column()
    tipo: string
    @Column({nullable: true})
    honorarioAdvocaticioAte?: string
    @Column({nullable: true})
    honorarioAdvocaticioPercentual?: string
    @Column({nullable: true})
    acordo?: string
    @Column({nullable: true})
    porcentagemRmi?: string

    @ManyToOne(() => User, { onDelete: 'CASCADE', eager: true })
    @JoinColumn()
    idUser: User;

    constructor(props: Omit<InformationsForCalcule, "id">, id?: number) {
        Object.assign(this, props);

        if (!id) {
            this.id = id;
        }

    
  }
}