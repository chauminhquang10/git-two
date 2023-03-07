import express from "express";
import cors from "cors";

import _ from "lodash";

import { QueryPayload } from "simple-shared-data";

const app = express();

app.use(cors());

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const port = 5000;

app.get("/", (req, res) => {
  const responseData: QueryPayload = {
    payload: _.snakeCase("Server data returned successfully"),
  };
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
