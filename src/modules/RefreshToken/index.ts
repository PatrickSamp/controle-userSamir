import { RefreshTokenController } from "./RefreshTokenController";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

const ISSUE = process.env.ISSUE;
const AUTHSERVE = process.env.AUTHSERVE;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

export const refreshTokenUseCase = new RefreshTokenUseCase(ISSUE, AUTHSERVE, REFRESH_SECRET);

export const refreshTokenController = new RefreshTokenController(refreshTokenUseCase);