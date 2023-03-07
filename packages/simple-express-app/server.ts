import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const port = 5000;

app.get("/", (req, res) => {
  res.json({
    foo: "bar",
  });
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
