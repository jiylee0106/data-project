import dotenv from "dotenv";
import swaggerJsDoc from "swagger-jsdoc";
import { swaggerSchema } from "./swagger.schema";

dotenv.config();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: "SINABRO API",
      version: "1.0.0",
      description: "SINABRO를 위한 swagger api 문서",
    },
    servers: [
      {
        url:
          process.env.NODE_ENV === "dev" ? process.env.SERVER_DEV_ORIGIN : "",
      },
    ],
    components: {
      schemas: swaggerSchema,
    },
    tags: [
      {
        name: "User",
        description: "유저 정보 관련 API",
      },
      {
        name: "Auth",
        description: "인증 정보 관련 API",
      },
      {
        name: "Point",
        description: "포인트 관련 API",
      },
      {
        name: "Collection",
        description: "컬렉션 관련 API",
      },
      {
        name: "Global",
        description: "전역 API",
      },
    ],
  },
  apis: ["./**/*.yaml"],
};

const swaggerSpecs = swaggerJsDoc(swaggerOptions);

export { swaggerSpecs };
