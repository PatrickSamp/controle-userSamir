import { PostgresCalculosLoteRepository } from "../../repositories/implementations/PostgresCalculosLoteRepository";
import { GetCalculoLoteController } from "./GetCalculoLoteController";
import { GetCalculoLoteUseCase } from "./GetCalculoLoteUseCase";

const postgresUsersRepository = new PostgresCalculosLoteRepository();

const getCalculoLoteUseCase = new GetCalculoLoteUseCase(
    postgresUsersRepository,
)

const getCalculoLoteController = new GetCalculoLoteController(
    getCalculoLoteUseCase
)

export { getCalculoLoteUseCase, getCalculoLoteController };