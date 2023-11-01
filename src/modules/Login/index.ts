import { LoginUseCase } from "./LoginUseCase";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { LoginUserController } from "./LoginController";

const postgresUsersRepository = new PostgresUsersRepository();

export  const loginUseCase = new LoginUseCase(postgresUsersRepository);

export const loginUserController = new LoginUserController(loginUseCase);