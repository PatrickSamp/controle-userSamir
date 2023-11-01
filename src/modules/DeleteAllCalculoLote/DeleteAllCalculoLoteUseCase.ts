import { ICalculosLoteRepository } from "../../repositories/ICalculosLoteRepository";
import { User } from '../../entities/User';
import { DeleteResult } from 'typeorm';

export class DeleteAllCalculoLoteUseCase {
    private calculosLoteRepository: ICalculosLoteRepository;
    constructor(
        calculosLoteRepository: ICalculosLoteRepository,
    ) {
        this.calculosLoteRepository = calculosLoteRepository;
    }
    async handle(data:User): Promise<DeleteResult> {
        return await this.calculosLoteRepository.deleteAll(data);
    }
}