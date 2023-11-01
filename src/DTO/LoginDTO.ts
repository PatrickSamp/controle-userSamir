export interface ILoginRequestDTO{
    userName: string
    password: string;
    
}
/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - userName
 *         - password
 *       properties:
 *         userName:
 *           type: string
 *           description: The Login userName
 *         password:
 *           type: string
 *           description: The Login password
 *       example:
 *         userName: Batman
 *         password: Senhasenh4
 */