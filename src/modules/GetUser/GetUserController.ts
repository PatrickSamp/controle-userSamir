import { Request, Response } from "express";
import { idetificationUser } from "../../auth";
import { GetUser } from "./GetUser";

export class GetUserController {
    constructor(
        private getUser: GetUser,
    ) { }
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const idUser: any = await idetificationUser.execute(request);
            const result = await this.getUser.handle(idUser);
            return response.status(200).send(result);
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}