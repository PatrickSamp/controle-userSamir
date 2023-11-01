import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginUserController {
    constructor(
        private loginUser: LoginUseCase,
    ) { }
    async execute(request: Request, response: Response): Promise<Response> {
        const {userName, password } = request.body;
        try {
           const result = await this.loginUser.handle(
                {
                    userName,
                    password,
                }
            );
            return response.status(200).send(result)
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error, {baixo, frente + soco = Hadouken!!}"
            });
        }
    }
} 