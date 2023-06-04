import request from "supertest";
import { app } from "../../src";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.user.deleteMany();
});

afterAll(async () => {
  await prisma.user.deleteMany();
});

describe("registerE2ETest", () => {
  it("회원가입 성공 및 중복 이메일 E2E 테스트", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ email: "test@test.test", password: "test1234!@" });

    expect(res.body.token).toBeDefined();
    expect(res.statusCode).toEqual(201);
  });

  it("회원가입 중복 이메일 E2E 테스트", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ email: "test@test.test", password: "test1234!@" });

    expect(res.body.message).toEqual("이미 존재하는 이메일입니다");
    expect(res.statusCode).toEqual(403);
  });

  it("회원가입 dto 실패 E2E 테스트", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ email: "", password: "" });

    expect(res.body.message).toEqual("유효하지 않은 요청입니다");
    expect(res.statusCode).toEqual(403);
  });
});
