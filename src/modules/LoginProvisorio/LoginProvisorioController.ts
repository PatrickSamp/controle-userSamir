import { Request, Response } from "express";
import { ILoginProvissorioRequestDTO } from "../../DTO/LoginProvissorioDTO";
import { LoginProvisorioUseCase } from "./LoginProvisorioUseCase";

export class LoginProvisorioController {
    constructor(
        private loginUser: LoginProvisorioUseCase,
    ) { }
    async execute(request: Request, response: Response): Promise<Response> {
        const body: ILoginProvissorioRequestDTO = request.body;
        try {
           const result = await this.loginUser.handle(body);
            return response.status(200).send(result)
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error, {baixo, frente + soco = Hadouken!!}"
            });
        }
    }
} 