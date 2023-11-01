import { PostgresCalculosLoteRepository } from "../../repositories/implementations/PostgresCalculosLoteRepository";
import { DeleteCalculoLoteController } from "./DeleteCalculoLoteController";
import { DeleteCalculoLoteUseCase } from "./DeleteCalculoLoteUseCase";

const postgresUsersRepository = new PostgresCalculosLoteRepository();

const deleteCalculoLoteUseCase = new DeleteCalculoLoteUseCase(
    postgresUsersRepository,
)

const deleteCalculoLoteController = new DeleteCalculoLoteController(
    deleteCalculoLoteUseCase
)

export { deleteCalculoLoteUseCase, deleteCalculoLoteController };