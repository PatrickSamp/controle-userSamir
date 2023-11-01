import { createToken, verifyPassword } from "../../auth";
import { ILoginRequestDTO } from "../../DTO/LoginDTO";
import { Token } from "../../DTO/Token";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class LoginUseCase {
    private usersRepository: IUsersRepository;
    constructor(
        usersRepository: IUsersRepository,
    ) {
        this.usersRepository = usersRepository;
    }
    async handle(data: ILoginRequestDTO): Promise<Token> {
        const userAlreadyExists = await this.usersRepository.findByUserName(data.userName);


        if (!userAlreadyExists) {
            throw new Error("The User does not exist!");
        }

        if (await verifyPassword.execute(data.password, userAlreadyExists.password)) {
            return createToken.execute(userAlreadyExists.id);
        } else {
            throw new Error("Invalid password!");
        }
    }
}