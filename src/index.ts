import {createConnection} from "typeorm";
import express from "express";
import routes from "./routes/routes";
import "reflect-metadata";
import dotenv from "dotenv";

dotenv.config();

createConnection().then(async connection => {
    const PORT = process.env.PORT || 5000; 
    const app = express();
    app.use(express.json());
    app.use("/", routes);
    app.use("/:id", routes); 

    app.listen(PORT, ()=>{
        console.log("===============================================");
        console.log(`Server up at http://localhost:${PORT}`);
        console.log("===============================================");
    });
}).catch(error => console.log(error));