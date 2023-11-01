import { Request, Response } from "express";
import { CreateArrayInformationsForCalculeUseCase } from "./CreateArrayInformationsForCalculeUseCase";
import { ICreateInformationsForCalculeDTO } from "../../DTO/ICreateInformationsForCalculeDTO";
import { idetificationUser } from "../../auth";
import { transformçaoDeArrayAnyParaArrayDeStrng } from "../../helps/ConvertoJSON";

export class CreateArrayInformationsForCalculeController {
    constructor(
        private useCase: CreateArrayInformationsForCalculeUseCase,
    ) { }
    async execute(request: Request, response: Response): Promise<Response> {
        var data: ICreateInformationsForCalculeDTO[] = [];    
        try {
            const idUser: any = await idetificationUser.execute(request);
            
            for (const element of request.body) {
                element.beneficiosAcumulados = await transformçaoDeArrayAnyParaArrayDeStrng(element.beneficiosAcumulados);
                element.idUser = idUser;
                data.push(element);
              }
              console.log(data)
            const newCalculosLote = await this.useCase.handle(
                data
            );
            return response.status(201).json(newCalculosLote);
        } catch (error) {
            console.log(error.message);
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
} 