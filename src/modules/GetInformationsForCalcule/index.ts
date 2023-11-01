import { PostgresInformationsForCalculeRepository } from "../../repositories/implementations/PostgresInformationsForCalculeRepository";
import { GetInformationsForCalculeController } from "./GetInformationsForCalculeController";
import { GetInformationsForCalculeUseCase } from "./GetInformationsForCalculeUseCase";

const postgresInformationsForCalculeRepository = new PostgresInformationsForCalculeRepository();

const getInformationsForCalculeUseCase = new GetInformationsForCalculeUseCase(
    postgresInformationsForCalculeRepository,
)

const getInformationsForCalculeController = new GetInformationsForCalculeController(
    getInformationsForCalculeUseCase
)

export { getInformationsForCalculeUseCase, getInformationsForCalculeController};