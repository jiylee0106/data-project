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

describe("getUserE2ETest", () => {
  it("유저 정보 요청 성공 E2E 테스트", async () => {
    const res = await request(app)
      .get("/api/user")
      .set("Authorization", `Bearer ${token}`);

    expect(res.body).toEqual("test@gmail.com");
    expect(res.statusCode).toEqual(201);
  });

  it("유저 정보 잘못된 토큰 요청 E2E 테스트", async () => {
    const res = await request(app)
      .get("/api/user")
      .set("Authorization", `Bearer strangeToken`);

    expect(res.body.message).toEqual("잘못된 토큰 형식입니다");
    expect(res.statusCode).toEqual(401);
  });
});
