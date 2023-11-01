import { DeleteResult, getRepository } from 'typeorm';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';
//import { UserRespository } from './RepositoriesLaunchers';


export class PostgresUsersRepository implements IUsersRepository {
    async findByCpf(cpf: string): Promise<User> {
        const user = await this.repository().findOne({ cpf });
        return user;
    }
    async findByUserName(userName: string): Promise<User> {
        const user = await this.repository().findOne({ userName });
        return user;
    }
    async save(user: User): Promise<User> {
        return await this.repository().save(user);
    }
    async findById(id: string): Promise<User> {
        const user = await this.repository().findOne({ id });
        return user;
    }
    async delete(id: string): Promise<DeleteResult> {
        return await this.repository().delete(id);
    }
    repository() {
        return getRepository(User);
    }
}