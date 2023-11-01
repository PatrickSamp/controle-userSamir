import { RefreshToken } from "../../DTO/RefreshToken";
import jsonwebtoken from 'jsonwebtoken';
import { CreateToken } from "../../auth/CreateToken";
import { Token } from "../../DTO/Token";

export class RefreshTokenUseCase {
    constructor(
        private ISSUE: string,
        private AUTHSERVE: string,
        private REFRESH_SECRET: string,) { }   

        async handle(data: RefreshToken): Promise<Token> {
        
        if (!data.refreshToken) {
            throw new Error("Access denied");
        }
        var token: Token;

        await jsonwebtoken.verify(data.refreshToken, this.REFRESH_SECRET, async (err, tokenRequest: any) => {
                if (err) {
                    throw new Error("Access denied");
                }
                if (this.ISSUE == tokenRequest.ISSUE && this.AUTHSERVE == tokenRequest.AUTHSERVE) {
                    let createToken = new CreateToken();
                    token = await createToken.execute(tokenRequest.id);
                } else {
                    throw new Error("Access denied");;
                }

            })
        return token;
    }
}