import { ICalculosLoteRepository } from "../../repositories/ICalculosLoteRepository";
import { DeleteResult } from 'typeorm';

export class DeleteCalculoLoteUseCase {
    private calculosLoteRepository: ICalculosLoteRepository;
    constructor(
        calculosLoteRepository: ICalculosLoteRepository,
    ) {
        this.calculosLoteRepository = calculosLoteRepository;
    }
    async handle(data:string): Promise<DeleteResult> {
        return await this.calculosLoteRepository.delete(data);
    }
}