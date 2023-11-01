import { DeleteResult } from "typeorm";
import { IInformationsForCalculeRepository } from "../../repositories/IInformationsForCalculeRepository";

export class DeleteInformationsForCalculeUseCase {
    private repository: IInformationsForCalculeRepository;
    constructor(
        repository: IInformationsForCalculeRepository,
    ) {
        this.repository = repository;
    }
    async handle(data:string): Promise<DeleteResult> {
        return await this.repository.delete(data);
    }
}