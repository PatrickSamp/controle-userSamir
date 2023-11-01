import { PostgresInformationsForCalculeRepository } from "../../repositories/implementations/PostgresInformationsForCalculeRepository";
import { CreateInformationsForCalculeController } from './CreateInformationsForCalculeContoller';
import { CreateInformationsForCalculeUseCase } from "./CreateInformationsForCalculeUseCase";

const postgresInformationsForCalculeRepository = new PostgresInformationsForCalculeRepository();

const createInformationsForCalculeUseCase = new CreateInformationsForCalculeUseCase(
    postgresInformationsForCalculeRepository,
)

const createinformationsForCalculeController = new CreateInformationsForCalculeController(
    createInformationsForCalculeUseCase
)

export { createInformationsForCalculeUseCase, createinformationsForCalculeController};