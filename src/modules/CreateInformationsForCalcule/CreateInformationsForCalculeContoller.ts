import { Request, Response } from "express";
import { CreateInformationsForCalculeUseCase } from "./CreateInformationsForCalculeUseCase";
import { ICreateInformationsForCalculeDTO } from "../../DTO/ICreateInformationsForCalculeDTO";
import { idetificationUser } from "../../auth";
import { transformçaoDeArrayAnyParaArrayDeStrng } from "../../helps/ConvertoJSON";

export class CreateInformationsForCalculeController {
    constructor(
        private createInformationsForCalculeUseCase: CreateInformationsForCalculeUseCase,
    ) { }
    async execute(request: Request, response: Response): Promise<Response> {
        request.body.beneficiosAcumulados = await transformçaoDeArrayAnyParaArrayDeStrng(request.body.beneficiosAcumulados);
        const data: ICreateInformationsForCalculeDTO = request.body;
        try {
            const idUser: any = await idetificationUser.execute(request);
            data.idUser = idUser;
            const newCalculosLote = await this.createInformationsForCalculeUseCase.handle(
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