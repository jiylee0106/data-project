import request from "supertest";
import { app } from "../../src";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.video.deleteMany();
});

afterAll(async () => {
  await prisma.video.deleteMany();
});

describe("getVideoContentE2ETest", () => {
  it("영상 목록 요청 성공 E2E 테스트", async () => {
    const res = await request(app).get("/api/content/video");

    expect(res.body).toEqual(null);
    expect(res.statusCode).toEqual(200);
  });
});
