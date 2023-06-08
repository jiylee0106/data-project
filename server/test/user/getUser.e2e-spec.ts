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

  it("비밀번호 변경 성공 E2E 테스트", async () => {
    const res = await request(app)
      .patch("/api/user/password")
      .set("Authorization", `Bearer ${token}`)
      .send({ password: "test4321!@" });

    expect(res.body.message).toEqual("비밀번호가 변경되었습니다");
    expect(res.statusCode).toEqual(201);
  });

  it("회원탈퇴 성공 E2E 테스트", async () => {
    const res = await request(app)
      .delete("/api/user")
      .set("Authorization", `Bearer ${token}`);

    expect(res.body.message).toEqual("유저가 삭제되었습니다");
    expect(res.statusCode).toEqual(201);
  });
});
