import express from 'express';
import * as http from 'http';
import apiRouter from './routes/indexRoutes.js';
import bodyParser from 'body-parser'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', apiRouter)

const myServer = new http.Server(app);

export default myServer;