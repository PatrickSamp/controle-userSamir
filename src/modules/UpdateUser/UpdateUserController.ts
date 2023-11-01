import { Request, Response } from "express";
import { idetificationUser } from "../../auth";
import { UpdateUserUseCase } from "./UpdateUserUseCsse";
import { IUpdateUserRequestDTO } from '../../DTO/IUpdateUserDTO';

export class UpdateUserController {
    constructor(
        private updateUserUseCase: UpdateUserUseCase,
    ) { }
    async execute(request: Request, response: Response): Promise<Response> {
        const body: IUpdateUserRequestDTO = request.body;
        try {
            body.id = await idetificationUser.execute(request);
            const result = await this.updateUserUseCase.handle(body);
            return response.status(200).send(result);
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}