import request from "supertest";
import { app } from "../../src";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let token: string;

beforeAll(async () => {
  await prisma.collection.deleteMany();
  await prisma.pointsLog.deleteMany();
  await prisma.user.deleteMany();
  const user = await request(app)
    .post("/api/auth/register")
    .send({ email: "test@gmail.com", password: "test1234!@" });

  token = user.body.token;
});

afterAll(async () => {
  await prisma.collection.deleteMany();
  await prisma.pointsLog.deleteMany();
  await prisma.user.deleteMany();
});

describe("getPointLogsE2ETest", () => {
  it("모든 포인트 로그 요청 E2E 테스트", async () => {
    const res = await request(app)
      .get("/api/point/logs")
      .set("Authorization", `Bearer ${token}`);

    expect(res.body).toHaveProperty("logs");
    expect(typeof res.body.logs).toEqual("object");
    expect(res.statusCode).toEqual(201);
  });
});
