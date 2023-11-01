import { ICreateInformationsForCalculeDTO } from "../../DTO/ICreateInformationsForCalculeDTO";
import { InformationsForCalcule } from "../../entities/InformationForCalcule";
import { IInformationsForCalculeRepository } from "../../repositories/IInformationsForCalculeRepository";

export class CreateArrayInformationsForCalculeUseCase {
    private calculosLoteRepository: IInformationsForCalculeRepository;
    constructor(
        calculosLoteRepository: IInformationsForCalculeRepository,
    ) {
        this.calculosLoteRepository = calculosLoteRepository;
    }
    async handle(data: ICreateInformationsForCalculeDTO[]): Promise<InformationsForCalcule[]> {
        let informationsForCalcules: InformationsForCalcule[] = [];
        await data.forEach(informationsForCalcule => {
            informationsForCalcules.push(new InformationsForCalcule(informationsForCalcule))
        })
        return await this.calculosLoteRepository.saveAll(informationsForCalcules);
    }
}