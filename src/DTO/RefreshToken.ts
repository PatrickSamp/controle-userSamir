export interface RefreshToken {
    refreshToken: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     RefreshToken:
 *       type: object
 *       required:
 *         - refreshToken
 *       properties:
 *         refreshToken:
 *           type: string
 *           description: refreshToken to have a new token after token expiration
 *       example:
 *         refreshToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyY2U3ZGJhLWRkMWEtNGYxMC05MjI1LTk0ZTYzY2JkMTI5MCIsIklTU1VFIjoiL2F1dGgvbG9naW4iLCJBVVRIU0VSVkUiOiJzaGF6YW0iLCJpYXQiOjE2NjE3MzYyNTgsImV4cCI6MTY2MTczOTg1OH0.2bZaNk-uyp8aR_NE31ifgZYBdpUJG6gkONaxZ44Yh2Q
 */