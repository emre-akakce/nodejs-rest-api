import express from "express";
import bodyParser from 'body-parser';
const feedRoutes = require('./routes/feed')
const app = express();
import swaggerUi from 'swagger-ui-express';

const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "NodeJs Swagger API",
            description: "NodeJs Swagger API Information",
            contact: {
                name: "Developer"
            },
            servers: ["http://localhost:8000"]
        },
    },
    apis: ['routes/*.ts']
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.json())

app.use((req: any, res: any, next: any) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})

app.use('/feed', feedRoutes)
app.listen(8000)