import { ICreateCalculoLoteRequestDTO } from '../../DTO/ICreateCalculoLoteRequestDTO';
import { CalculosLote } from '../../entities/CalculosLote';
import { ICalculosLoteRepository } from '../../repositories/ICalculosLoteRepository';
export class CreateCalculoLoteUseCase {
    private calculosLoteRepository: ICalculosLoteRepository;
    constructor(
        calculosLoteRepository: ICalculosLoteRepository,
    ) {
        this.calculosLoteRepository = calculosLoteRepository;
    }
    async handle(data: ICreateCalculoLoteRequestDTO): Promise<CalculosLote> {
        const calculosLote = new CalculosLote(data);
        return await this.calculosLoteRepository.save(calculosLote);
    }
}