import { encryptPassword } from '../../auth';
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from '../../DTO/ICreateUserRequestDTO';
export class CreateUserUseCase {
    private usersRepository: IUsersRepository;
    constructor(
        usersRepository: IUsersRepository,
    ) {
        this.usersRepository = usersRepository;
    }
    async handle(data: ICreateUserRequestDTO): Promise<User> {
        const userAlreadyExists = await this.usersRepository.findByCpf(data.cpf) || await this.usersRepository.findByUserName(data.userName);
        if (userAlreadyExists) {
            throw new Error("User already exits!");
        }
        data.password = await encryptPassword.execute(data.password);
        const user = new User(data);
        let result: any = await this.usersRepository.save(user);
        result.password = " ";

        return result;
    }
}