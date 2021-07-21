import * as express from "express";
import { Express } from "express";

export function newApp(): Express {
    const app = express();

    app.get('/', (_, res: express.Response) => {
        res.send('Hello, world!');
    });

    return app;
}
