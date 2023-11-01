import { IGetInformationsForCalcule } from "../../DTO/IGetInformationsForCalcule";
import { InformationsForCalcule } from "../../entities/InformationForCalcule";
import { User } from "../../entities/User";
import { transformçaoDeStringAnyParaArrayDeBeneficiosAcumuladoForCalcule } from "../../helps/ConvertoJSON";
import { IInformationsForCalculeRepository } from "../../repositories/IInformationsForCalculeRepository";


export class GetInformationsForCalculeUseCase {
    private calculosLoteRepository: IInformationsForCalculeRepository;
    constructor(
        informationsForCalculeRepository: IInformationsForCalculeRepository,
    ) {
        this.calculosLoteRepository = informationsForCalculeRepository;
    }
    async handle(data:User): Promise<Array<IGetInformationsForCalcule>> {
        const object = await this.calculosLoteRepository.findByIdUser(data)
        const result: IGetInformationsForCalcule[] = [];
        object.forEach( async (item) => {
            let conversor: IGetInformationsForCalcule = item;
            conversor.beneficiosAcumulados = await transformçaoDeStringAnyParaArrayDeBeneficiosAcumuladoForCalcule(item.beneficiosAcumulados)
            result.push(conversor);
        })
        return await result;
    }
}