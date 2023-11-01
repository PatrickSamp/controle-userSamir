import { Request, Response } from "express";
import { idetificationUser } from "../../auth";
import { GetCalculoLoteUseCase } from "./GetCalculoLoteUseCase";

export class GetCalculoLoteController {
    constructor(
        private getCalculoLoteUseCase: GetCalculoLoteUseCase,
    ) { }
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const idUser: any = await idetificationUser.execute(request);
            const newCalculosLote = await this.getCalculoLoteUseCase.handle(
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