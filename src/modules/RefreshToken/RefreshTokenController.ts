import { Request, Response } from "express";
import { RefreshToken } from "../../DTO/RefreshToken";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

export class RefreshTokenController {
    
    constructor(
        private RefreshToken: RefreshTokenUseCase,
    ) { }
    async execute(request: Request, response: Response): Promise<Response> {
        const data: RefreshToken = request.body;
        try {
           const result = await this.RefreshToken.handle(data);
            return response.status(200).send(result)
        } catch (error) {
            if (error.message == "Access denied"){
                return response.status(400).json({
                    message: error.message
                });
            }
            return response.status(400).json({
                message: error.message || "Unexpected error, {baixo, frente + soco = Hadouken!!}"
            });
        }
    }
} 