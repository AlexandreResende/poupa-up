
import * as express from "express";
import * as helmet from "helmet";
import * as bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("HI!");
})

app
  .use(helmet())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .listen(port, () => {
    console.log(`Server up and running on port ${port}`);
  });

export default app;
