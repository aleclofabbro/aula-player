import * as express from 'express';
import { createServer } from 'http';
import { ws } from './ws';
// tslint:disable-next-line:no-require-imports no-var-requires
const cors = require('cors');

// tslint:disable-next-line:no-require-imports no-var-requires

const app = express();
app.use(cors());

const httpServer = createServer(app);

ws(httpServer);

app.options('/library', cors()); // enable pre-flight request for DELETE request
// tslint:disable-next-line:variable-name
app.get('/library', (_req, res) => res.sendfile('./library.json'));

httpServer.listen(8080);
