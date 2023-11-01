import { ICreateInformationsForCalculeDTO } from "../../DTO/ICreateInformationsForCalculeDTO";

import { InformationsForCalcule } from "../../entities/InformationForCalcule";
import { IInformationsForCalculeRepository } from "../../repositories/IInformationsForCalculeRepository";

export class UpdateInformationForCalculeUseCase {
    private calculosLoteRepository: IInformationsForCalculeRepository;
    constructor(
        calculosLoteRepository: IInformationsForCalculeRepository,
    ) {
        this.calculosLoteRepository = calculosLoteRepository;
    }


    async handle(data: ICreateInformationsForCalculeDTO): Promise<ICreateInformationsForCalculeDTO> {
        let informationsForCalcule: ICreateInformationsForCalculeDTO = data;
        const id = informationsForCalcule.id
        return await this.calculosLoteRepository.updateCalcule(new InformationsForCalcule(informationsForCalcule), id);
    }
}