export interface IUpdateUserRequestDTO {
    id:string;
    name?: string;
    userName?: string
    cpf?: string
    password?: string;
    passwordSapiens?:string

}
/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateUser:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id 
 *         name:
 *           type: string
 *           description: The user name
 *         cpf:
 *           type: string
 *           description: The user cpf
 *         userName:
 *           type: string
 *           description: The userName for user authentication
 *         password:
 *           type: string
 *           description: TThe password for user authentication
 *       example:
 *         id: idUser
 *         name: Bruce Wayne
 *         userName: Batman
 *         cpf: "02127337298"
 *         password: Senhasenh4
 */


