import { DeleteResult } from "typeorm";
import { IInformationsForCalculeRepository } from "../../repositories/IInformationsForCalculeRepository";
import { User } from "../../entities/User";

export class DeleteAllInformationsForCalculeUseCase {
    private repository: IInformationsForCalculeRepository;
    constructor(
        repository: IInformationsForCalculeRepository,
    ) {
        this.repository = repository;
    }
    async handle(data:User): Promise<DeleteResult> {
        return await this.repository.deleteAll(data);
    }
}