import express from "express";
import cors from "cors";
import { router } from "./router";

const app = express();

app.use(cors({
    origin:'frontend:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}));
app.use(router);

app.listen(8000, () => {
    console.log('server is running...');
});