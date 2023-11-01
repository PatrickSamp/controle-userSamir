import { PostgresInformationsForCalculeRepository } from '../../repositories/implementations/PostgresInformationsForCalculeRepository';
import { DeleteAllInformationsForCalculeUseCase } from './DeleteAllInformationsForCalculeUseCase';
import { DeleteAllInformationsForCalculeController } from './DeleteAllInformationsForCalculeController';
const postgresInformationsForCalculeRepository = new PostgresInformationsForCalculeRepository();

const deleteAllInformationsForCalculeUseCase = new DeleteAllInformationsForCalculeUseCase(
    postgresInformationsForCalculeRepository,
)

const deleteAllInformationsForCalculeController = new DeleteAllInformationsForCalculeController(
    deleteAllInformationsForCalculeUseCase
)

export { deleteAllInformationsForCalculeUseCase, deleteAllInformationsForCalculeController };