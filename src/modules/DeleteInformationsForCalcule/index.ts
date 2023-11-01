import { PostgresInformationsForCalculeRepository } from "../../repositories/implementations/PostgresInformationsForCalculeRepository";
import { DeleteInformationsForCalculeController } from "./DeleteInformationsForCalculeController";
import { DeleteInformationsForCalculeUseCase } from "./DeleteInformationsForCalculeUsecase";

const postgresInformationsForCalculeRepository = new PostgresInformationsForCalculeRepository();

const deleteInformationsForCalculeUseCase = new DeleteInformationsForCalculeUseCase(
    postgresInformationsForCalculeRepository,
)

const deleteInformationsForCalculeController = new DeleteInformationsForCalculeController(
    deleteInformationsForCalculeUseCase
)

export { deleteInformationsForCalculeUseCase, deleteInformationsForCalculeController };