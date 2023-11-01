import { Request, Response } from "express";
import { idetificationUser } from "../../auth";
import { ICreateCalculoLoteRequestDTO } from "../../DTO/ICreateCalculoLoteRequestDTO";
import { CreateCalculoLoteUseCase } from "./CreateCalculoLoteUseCase";

export class CreateCalculoLoteController {
    constructor(
        private createCalculoLoteUseCase: CreateCalculoLoteUseCase,
    ) { }
    async execute(request: Request, response: Response): Promise<Response> {
        const data: ICreateCalculoLoteRequestDTO = request.body;
        try {
            const idUser: any = await idetificationUser.execute(request);
            data.idUser = idUser;
            const newCalculosLote = await this.createCalculoLoteUseCase.handle(
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