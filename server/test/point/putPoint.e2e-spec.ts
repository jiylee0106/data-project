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
  it("포인트 적립 성공 E2E 테스트", async () => {
    const res = await request(app)
      .put("/api/point")
      .set("Authorization", `Bearer ${token}`)
      .send({ action_type: "Earned", method: "Watched_Data" });

    expect(res.body.message).toEqual("포인트 적립에 성공하였습니다");
    expect(res.statusCode).toEqual(201);
  });

  it("포인트 적립 후 사용 성공 E2E 테스트", async () => {
    await request(app)
      .put("/api/point")
      .set("Authorization", `Bearer ${token}`)
      .send({ action_type: "Earned", method: "Joined_Campaign1" });

    const res = await request(app)
      .put("/api/point")
      .set("Authorization", `Bearer ${token}`)
      .send({ action_type: "Spent", method: "Draw_Degree2" });

    expect(res.body.message).toEqual("포인트 사용에 성공하였습니다");
    expect(res.statusCode).toEqual(201);
  });

  it("포인트 사용 잔액 부족 E2E 테스트", async () => {
    const res = await request(app)
      .put("/api/point")
      .set("Authorization", `Bearer ${token}`)
      .send({ action_type: "Spent", method: "Draw_Degree2" });

    expect(res.body.message).toEqual("포인트가 부족합니다");
    expect(res.statusCode).toEqual(403);
  });
});
