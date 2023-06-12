import request from "supertest";
import { app } from "../../src";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.news.deleteMany();
});

afterAll(async () => {
  await prisma.news.deleteMany();
});

describe("getNewsContentE2ETest", () => {
  it("뉴스 목록 요청 성공 E2E 테스트", async () => {
    const res = await request(app).get("/api/content/news");

    expect(res.body).toEqual([]);
    expect(res.statusCode).toEqual(200);
  });
});
