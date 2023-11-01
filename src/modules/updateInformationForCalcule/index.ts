import { PostgresInformationsForCalculeRepository } from "../../repositories/implementations/PostgresInformationsForCalculeRepository";
import { UpdateInformationForCalculeController } from "./updateInformationForCalculeController";
import { UpdateInformationForCalculeUseCase } from "./updateInformationForCalculeUseCase";


const postgresInformationsForCalculeRepository = new PostgresInformationsForCalculeRepository();


export const updateInformationForCalculeUseCase = new UpdateInformationForCalculeUseCase(
    postgresInformationsForCalculeRepository
);


export const updateInformationForCalculeController = new UpdateInformationForCalculeController(
    updateInformationForCalculeUseCase
);