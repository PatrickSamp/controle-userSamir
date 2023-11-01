import { PostgresCalculosLoteRepository } from "../../repositories/implementations/PostgresCalculosLoteRepository";
import { CreateCalculoLoteController } from "./CreateCalculoLoteController";
import { CreateCalculoLoteUseCase } from "./CreateCalculoLoteUseCase";

const postgresUsersRepository = new PostgresCalculosLoteRepository();

const createCalculoLoteUseCase = new CreateCalculoLoteUseCase(
    postgresUsersRepository,
)

const createCalculoLoteController = new CreateCalculoLoteController(
    createCalculoLoteUseCase
)

export { createCalculoLoteUseCase, createCalculoLoteController };