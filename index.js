import express from 'express';

// modulos 
import pool from './pool.js';
import routeLogin from './routes/login.js';

const app = express();
app.use(express.json());
app.use(routeLogin);

const port = 3000;

app.listen(port, () => {
    console.log("Servidor ativo na porta", port);
})