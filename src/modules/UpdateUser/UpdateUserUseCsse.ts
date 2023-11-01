import { encryptPassword, verifyPassword } from "../../auth";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUpdateUserRequestDTO } from "../../DTO/IUpdateUserDTO";

export class UpdateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,

    ) {
        this.usersRepository = usersRepository;
    }
    async handle(data: IUpdateUserRequestDTO): Promise<User> {
        var UserDB: User;
        try {
            UserDB = await this.usersRepository.findById(data.id);

        } catch (error) {
            throw new Error("Invalid id!");
        }
        UserDB.userName = data.userName ? data.userName : UserDB.userName;
        UserDB.cpf = data.cpf ? data.cpf : UserDB.cpf;
        UserDB.password = data.password && !(await verifyPassword.execute(data.password, UserDB.password)) ? await encryptPassword.execute(data.password) : UserDB.password;
        UserDB.name = data.name ? data.name : UserDB.name;
        let result = await this.usersRepository.save(UserDB);
        result.password = "";
        return result;
    }
}