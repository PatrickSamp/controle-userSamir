export interface ILoginProvissorioRequestDTO{
    userName: string
    cpf: string;
    
}
/**
 * @swagger
 * components:
 *   schemas:
 *     LoginProvissorio:
 *       type: object
 *       required:
 *         - userName
 *         - password
 *       properties:
 *         userName:
 *           type: string
 *           description: The Login userName
 *         cpf:
 *           type: string
 *           description: The Login password
 *       example:
 *         userName: Batman
 *         cpf: "02127337298"
 */