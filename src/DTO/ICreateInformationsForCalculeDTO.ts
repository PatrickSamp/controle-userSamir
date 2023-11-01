import { BeneficiosAcumuladoForCalcule } from "../entities/BeneficiosAcumuladoForCalcule";
import { User } from "../entities/User";

export interface ICreateInformationsForCalculeDTO {
    numeroDoProcesso: string,
    id?: number,
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
    beneficiosAcumulados?:string[],
    urlProcesso: string,
    dibAnterior: string,
    beneficioAcumuladoBoolean: boolean,
    tipo: string
    honorarioAdvocaticioAte?: string
    honorarioAdvocaticioPercentual?: string
    acordo?: string
    porcentagemRmi?: string
    idUser: User 
}