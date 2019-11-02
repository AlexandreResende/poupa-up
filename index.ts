import express, { Application } from "express";
import * as bodyParser from "body-parser";

const PORT = 7777;
const app: Application = express();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json());

app.get("/", (req, res) => res.status(200).send(req.body));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
