import { LoginProvisorioUseCase } from "./LoginProvisorioUseCase";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { LoginProvisorioController } from "./LoginProvisorioController";

const postgresUsersRepository = new PostgresUsersRepository();

export  const loginProvisorioUseCase = new LoginProvisorioUseCase(postgresUsersRepository);

export const loginProvisorioController = new LoginProvisorioController(loginProvisorioUseCase);