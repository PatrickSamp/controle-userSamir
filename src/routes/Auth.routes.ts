import { Router } from "express";
import { refreshTokenController } from "../modules/RefreshToken";

export const routerAuth = Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:           
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT  
 */

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Refresh token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RefreshToken'
 *     responses:
 *       200:
 *         description: The category was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Token'
 *       500:
 *         description: Some server error
 *       401:
 *         description: The request Unauthorized
 */

routerAuth.post("/", (req, res) => {
    return refreshTokenController.execute(req, res);
})