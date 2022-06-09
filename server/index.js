import express from "express";
import { env } from "./configs/env.js";
import { router as apiV1Router } from "./routes/api.routes.js";
import { createTable } from "./configs/db.js";
import cors from "cors";
createTable();

const corsOptions = {
  origin: "*",
};


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", apiV1Router);

app.use((_, res) => {
  res.status(404).send({ message: env.MESSAGE_404 });
});

app.listen(env.PORT, () => {
  console.log(`Server working at port ${env.PORT}`);
});
