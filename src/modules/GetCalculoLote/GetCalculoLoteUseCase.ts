import { CalculosLote } from "../../entities/CalculosLote";
import { User } from "../../entities/User";
import { ICalculosLoteRepository } from "../../repositories/ICalculosLoteRepository";

export class GetCalculoLoteUseCase {
    private calculosLoteRepository: ICalculosLoteRepository;
    constructor(
        calculosLoteRepository: ICalculosLoteRepository,
    ) {
        this.calculosLoteRepository = calculosLoteRepository;
    }
    async handle(data:User): Promise<Array<CalculosLote>> {
        return await this.calculosLoteRepository.findByIdUser(data);
    }
}