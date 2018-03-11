import * as express from 'express';
import { ws } from './ws';
// tslint:disable-next-line:no-require-imports no-var-requires
const http = require('http');

const app = express();
const httpServer = new http.Server(app);

ws(httpServer);

app.get('/library', (_req, res) => res.sendfile('./library.json'));

app.listen(8080);
