import { DeleteResult } from "typeorm";
import { User } from "../entities/User";

export interface IUsersRepository {
    findByCpf(cpf: string): Promise<User>;
    findByUserName(userName: string): Promise<User>;
    save(user: User): Promise<User>;
    findById(id: string): Promise<User>;
    delete(id: string): Promise<DeleteResult>;
    repository();
}