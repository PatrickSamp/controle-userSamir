import { createToken, verifyPassword } from "../../auth";
import { ILoginProvissorioRequestDTO } from "../../DTO/LoginProvissorioDTO";
import { Token } from "../../DTO/Token";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class LoginProvisorioUseCase {
    private usersRepository: IUsersRepository;
    constructor(
        usersRepository: IUsersRepository,
    ) {
        this.usersRepository = usersRepository;
    }
    async handle(data: ILoginProvissorioRequestDTO): Promise<Token> {
        const userAlreadyExists = await this.usersRepository.findByUserName(data.userName);


        if (!userAlreadyExists) {
            throw new Error("The User does not exist!");
        }

        if (data.cpf == userAlreadyExists.cpf) {
            return createToken.execute(userAlreadyExists.id);
        } else {
            throw new Error("Invalid password!");
        }
    }
}