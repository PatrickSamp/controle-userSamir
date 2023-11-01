import { DeleteResult } from "typeorm";
import { User } from "../entities/User";
import { CalculosLote } from "../entities/CalculosLote";

export interface ICalculosLoteRepository {
    findByIdUser(idUser: User): Promise<CalculosLote[]>;
    save(calculosLote: CalculosLote): Promise<CalculosLote>;
    findById(id: string): Promise<CalculosLote>;
    delete(id: string): Promise<DeleteResult>;
    deleteAll(idUser: User): Promise<DeleteResult>; 
    repository();
}