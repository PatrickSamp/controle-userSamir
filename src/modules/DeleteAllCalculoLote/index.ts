import { PostgresCalculosLoteRepository } from "../../repositories/implementations/PostgresCalculosLoteRepository";
import { DeleteAllCalculoLoteController } from "./DeleteAllCalculoLoteController";
import { DeleteAllCalculoLoteUseCase } from "./DeleteAllCalculoLoteUseCase";

const postgresUsersRepository = new PostgresCalculosLoteRepository();

const deleteAllCalculoLoteUseCase = new DeleteAllCalculoLoteUseCase(
    postgresUsersRepository,
)

const deleteAllCalculoLoteController = new DeleteAllCalculoLoteController(
    deleteAllCalculoLoteUseCase
)

export { deleteAllCalculoLoteUseCase, deleteAllCalculoLoteController };