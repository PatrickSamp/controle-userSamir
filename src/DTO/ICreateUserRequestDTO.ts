export interface ICreateUserRequestDTO {
    userName: string;
    name: string;
    /* cpf: string */
    password: string;
    /* passwordSapiens:string */

}

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUser:
 *       type: object
 *       required:
 *         - name
 *         - userName
 *         - cpf
 *         - password
 *         - passwordSapiens
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
 *         passwordSapiens:
 *           type: string
 *           description: TThe password for user authentication in the Sapiens
 *       example:
 *         id: idUser
 *         name: Bruce Wayne
 *         userName: Batman
 *         cpf: "02127337298"
 *         password: Senhasenh4
 *         passwordSapiens: Senhasenh4
 */