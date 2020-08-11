import express, { Application } from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./src/application/controllers";

const PORT = 7777;
const app: Application = express();
const routes = new Routes().getRoutes();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(routes);

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
