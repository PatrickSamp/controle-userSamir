import { DeleteResult, getRepository } from "typeorm";
import { InformationsForCalcule } from "../../entities/InformationForCalcule";
import { User } from "../../entities/User";
import { IInformationsForCalculeRepository } from "../IInformationsForCalculeRepository";


export class PostgresInformationsForCalculeRepository implements IInformationsForCalculeRepository {
    async updateCalcule(informationsForCalcule:InformationsForCalcule, id: number): Promise<any> {
        delete informationsForCalcule.id
        console.log(informationsForCalcule)
        const updateCalcule = await await this.repository().update(id,informationsForCalcule)
        return updateCalcule
    }
    async save(InformationsForCalcule: InformationsForCalcule) {
        return this.repository().save(InformationsForCalcule);
    }
    async saveAll(InformationsForCalcules: InformationsForCalcule[]) {
   
        var result:  InformationsForCalcule[]= []; 
        for(const InformationsForCalcule of InformationsForCalcules) {
            result.push( await this.repository().save(InformationsForCalcule))  
        }
        return await result;
    }
    async findById(id: number): Promise<InformationsForCalcule> {
        const InformationsForCalcule = await this.repository().findOne({ id });
        return InformationsForCalcule;
    }
    async findByIdUser(idUser: User): Promise<InformationsForCalcule[]> {
        const InformationsForCalcule = await this.repository().find({ idUser })
        return InformationsForCalcule;
    }
    async delete(id: string): Promise<DeleteResult> {
        return await this.repository().delete(id);
    }
    async deleteAll(idUser: User): Promise<DeleteResult> {
        return await this.repository().delete({ idUser})
     }   
    repository() {
        return getRepository(InformationsForCalcule);
    }
}