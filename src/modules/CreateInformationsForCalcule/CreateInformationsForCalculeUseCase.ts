import { ICreateInformationsForCalculeDTO } from "../../DTO/ICreateInformationsForCalculeDTO";
import { InformationsForCalcule } from "../../entities/InformationForCalcule";
import { IInformationsForCalculeRepository } from '../../repositories/IInformationsForCalculeRepository';

export class CreateInformationsForCalculeUseCase {
    private calculosLoteRepository: IInformationsForCalculeRepository;
    constructor(
        calculosLoteRepository: IInformationsForCalculeRepository,
    ) {
        this.calculosLoteRepository = calculosLoteRepository;
    }
    async handle(data: ICreateInformationsForCalculeDTO): Promise<InformationsForCalcule> {
        const calculosLote = new InformationsForCalcule(data);
        return await this.calculosLoteRepository.save(calculosLote);
    }
}