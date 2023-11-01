import { Request, Response } from "express";
import { DeleteAllInformationsForCalculeUseCase } from "./DeleteAllInformationsForCalculeUseCase";
import { idetificationUser } from "../../auth";

export class DeleteAllInformationsForCalculeController {
    constructor(
        private usecase: DeleteAllInformationsForCalculeUseCase,
    ) { }
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const idUser: any = await idetificationUser.execute(request);
            const newCalculosLote = await this.usecase.handle(
                idUser
            );
            return response.status(200).json(newCalculosLote);
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}