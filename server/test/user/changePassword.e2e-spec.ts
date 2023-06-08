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

describe("changePasswordE2ETest", () => {
  it("비밀번호 변경 성공 E2E 테스트", async () => {
    const res = await request(app)
      .patch("/api/user/password")
      .set("Authorization", `Bearer ${token}`)
      .send({ password: "test4321!@" });

    expect(res.body.message).toEqual("비밀번호가 변경되었습니다");
    expect(res.statusCode).toEqual(201);
  });

  it("비밀번호 변경 잘못된 토큰 요청 E2E 테스트", async () => {
    const res = await request(app)
      .patch("/api/user/password")
      .set("Authorization", `Bearer strangeToken`)
      .send({ password: "test4321!@" });

    expect(res.body.message).toEqual("잘못된 토큰 형식입니다");
    expect(res.statusCode).toEqual(401);
  });

  it("비밀번호 변경 잘못된 비밀번호 형식 요청 E2E 테스트", async () => {
    const res = await request(app)
      .patch("/api/user/password")
      .set("Authorization", `Bearer ${token}`)
      .send({ password: "test4321" });

    expect(res.body.message).toEqual("유효하지 않은 요청입니다");
    expect(res.statusCode).toEqual(403);
  });
});
