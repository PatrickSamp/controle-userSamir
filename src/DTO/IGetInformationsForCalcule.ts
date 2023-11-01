import { BeneficiosAcumuladoForCalcule } from "../entities/BeneficiosAcumuladoForCalcule";
import { User } from "../entities/User";

export interface IGetInformationsForCalcule {
    id: number;
    numeroDoProcesso: string,
    nome: string,
    dataAjuizamento: string,
    cpf: string,
    dibInicial: string,
    dibFinal?: string,
    rmi: string,
    beneficio: string,
    nb: string,
    dip: string,
    aps?: string,
    citacao?: string,
    beneficiosAcumulados?:BeneficiosAcumuladoForCalcule[] | string[],
    urlProcesso: string,
    dibAnterior: string,
    beneficioAcumuladoBoolean: boolean,
    tipo: string
    idUser: User 
}