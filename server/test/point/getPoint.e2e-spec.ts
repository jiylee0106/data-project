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

describe("getPointE2ETest", () => {
  it("포인트 잔액 정보 요청 성공 E2E 테스트", async () => {
    const res = await request(app)
      .get("/api/point")
      .set("Authorization", `Bearer ${token}`);

    expect(res.body).toHaveProperty("point");
    expect(res.statusCode).toEqual(201);
  });
});
