import { Request, Response } from "express";

import { idetificationUser } from "../../auth";
import { ICreateInformationsForCalculeDTO } from "../../DTO/ICreateInformationsForCalculeDTO";
import { UpdateInformationForCalculeUseCase } from "./updateInformationForCalculeUseCase";




export class UpdateInformationForCalculeController {
    constructor(
        private useCase: UpdateInformationForCalculeUseCase,
    ) { }
    async execute(request: Request, response: Response): Promise<Response> {
        const data:ICreateInformationsForCalculeDTO = request.body    
        
        try {
            const idUser: any = await idetificationUser.execute(request);
            data[0].idUser = idUser
            
            const objecUpdate = await this.useCase.handle(
                data[0]
            )
                
            return response.status(201).json(objecUpdate)
        } catch (error) {
            console.log(error.message);
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
} 