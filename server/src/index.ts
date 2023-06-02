import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import { swaggerSpecs } from "./docs/swagger.option";

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: process.env.NODE_ENV === "dev" ? process.env.CLIENT_DEV_ORIGIN : "",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Authorization"],
  })
);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.get("/", async (req, res) => {
  res.send("Hello, World");
});

app.use(((err, req, res, next) => {
  console.error(err.message);
  res
    .status(err.status || 500)
    .json({ message: err.message || "서버 실행 오류" });
}) as ErrorRequestHandler);

const startServer = async () => {
  return app.listen(3000, () => console.log("3000번 포트에서 Express 실행"));
};

if (process.env.NODE_ENV !== "test") {
  (async () => {
    await startServer();
  })();
}

export { app, startServer };
