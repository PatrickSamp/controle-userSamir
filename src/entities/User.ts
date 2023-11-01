import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CalculosLote } from "./CalculosLote";
import { InformationsForCalcule } from "./InformationForCalcule";
const { v4: uuid } = require("uuid");

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    userName: string;

    @Column({ unique: true })
    cpf: string;

    @Column()
    password: string;

    /* @Column()
    passwordSapiens: string; */


    @OneToMany(() => CalculosLote, calculosLote => calculosLote.idUser)
    calculosLotes?: CalculosLote[];
    @OneToMany(() => InformationsForCalcule, informationsForCalcule => informationsForCalcule.idUser)
    informationsForCalcule?: InformationsForCalcule[];

    constructor(props: Omit<User, "id">, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        } else {
            this.id = id;
        }
    }
}

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - userName
 *         - cpf
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id
 *         name:
 *           type: string
 *           description: The user name
 *         cpf:
 *           type: string
 *           description: The user cpf
 *         userName:
 *           type: string
 *           description: The userName for user authentication
 *         password:
 *           type: string
 *           description: TThe password for user authentication
 *       example:
 *         id: idUser
 *         name: Bruce Wayne
 *         userName: Batman
 *         cpf: 2127337298
 *         password: Senhasenh4
 */