import request from "supertest";
import { app } from "../../src";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.participation.deleteMany();
});

afterAll(async () => {
  await prisma.participation.deleteMany();
});

describe("getParticipationContentE2ETest", () => {
  it("동참 목록 요청 성공 E2E 테스트", async () => {
    const res = await request(app).get("/api/content/participation");

    expect(res.body).toEqual(null);
    expect(res.statusCode).toEqual(200);
  });
});
