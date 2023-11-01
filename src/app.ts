import express, { NextFunction, Request, Response } from "express";
var cors = require('cors')
import logger from "morgan";
import bodyParser from "body-parser";
import { connectionToServeDatabase } from "./config/DB";
import routes from "./routes";
import helmet from "helmet";




const app = express();


app.use(cors());


app.use(helmet.frameguard({ action: 'deny' }));



app.use(express.json());

/**
 * open access to services
 */
 /* app.use(cors()); */

/**
 * The routes of API
 */
app.use(routes);

/**
 * Permission to receive and send json
 */
app.use(bodyParser.json());

/**
 * Configuration of logs
 */
app.use(logger("dev"));

/**
 * Error controller
 */
app.use(
    (err: Error, request: Request, response: Response, nex: NextFunction) => {
        if (err instanceof Error) {
            return response.status(400).json({
                message: err.message
            })
        }
        return response.status(500).json({
            status: `error`,
            message: `I'm BATMAM!!. Internal server error - ${err}`
        });
    }
)

/**
 * Connection in DB
 */
connectionToServeDatabase();


export { app } 