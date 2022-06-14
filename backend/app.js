import express from 'express';
import {openDb} from './configDB.js';
import { createTable } from './Controller/personal.js';
import router from './routes.js';
import cors from 'cors';
import { createTableContato } from './Controller/contato.js';

const app = express();
const port = 3000;

app.use(express.static("./frontend/"));
app.use(express.json());
app.use(cors());
app.use(router);

openDb();
createTable();
createTableContato();


app.listen(port, () => {
    console.log("API rodando");
});