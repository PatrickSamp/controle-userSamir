import { BeneficiosAcumuladoForCalcule } from "../entities/BeneficiosAcumuladoForCalcule";

export async function transformçaoDeArrayAnyParaArrayDeStrng(data: any[]):Promise<string[]> {
    var result: string[] = [];
    if(data == null) {
        return result;
    }
    for(const objec of data){
        result.push(JSON.stringify(objec));
    }

    return await result;
}

export async function transformçaoDeStringAnyParaArrayDeBeneficiosAcumuladoForCalcule(data: string[]):Promise<BeneficiosAcumuladoForCalcule[]> {
    var result: BeneficiosAcumuladoForCalcule[] = [];
    if(data == null) {
        return result;
    }
    for(const objec of data){
        result.push(JSON.parse(objec));
    }

    return await result;
}