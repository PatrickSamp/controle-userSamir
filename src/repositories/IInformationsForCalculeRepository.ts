import { DeleteResult } from "typeorm";
import { User } from "../entities/User";
import { InformationsForCalcule } from "../entities/InformationForCalcule";


export interface IInformationsForCalculeRepository {
    findByIdUser(idUser: User): Promise<InformationsForCalcule[]>;
    save(informationsForCalcule: InformationsForCalcule): Promise<InformationsForCalcule>;
    saveAll(informationsForCalcules: InformationsForCalcule[]): Promise<InformationsForCalcule[]>;
    findById(id: number): Promise<InformationsForCalcule>;
    delete(id: string): Promise<DeleteResult>;
    deleteAll(idUser: User): Promise<DeleteResult>; 
    updateCalcule(informationsForCalcules: InformationsForCalcule, id: number): Promise<any>;
    repository();
}