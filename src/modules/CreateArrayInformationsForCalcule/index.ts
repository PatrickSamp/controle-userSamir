import { PostgresInformationsForCalculeRepository } from "../../repositories/implementations/PostgresInformationsForCalculeRepository";
import { CreateArrayInformationsForCalculeController } from "./CreateArrayInformationsForCalculeController";
import { CreateArrayInformationsForCalculeUseCase } from "./CreateArrayInformationsForCalculeUseCase";

const postgresInformationsForCalculeRepository = new PostgresInformationsForCalculeRepository();

const createArrayInformationsForCalculeUseCase = new CreateArrayInformationsForCalculeUseCase(
    postgresInformationsForCalculeRepository,
)

const createArrayInformationsForCalculeController = new CreateArrayInformationsForCalculeController(
    createArrayInformationsForCalculeUseCase
)

export { createArrayInformationsForCalculeUseCase, createArrayInformationsForCalculeController};