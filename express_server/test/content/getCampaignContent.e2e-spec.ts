import request from "supertest";
import { app } from "../../src";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.campaign.deleteMany();
});

afterAll(async () => {
  await prisma.campaign.deleteMany();
});

describe("getCampaignContentE2ETest", () => {
  it("캠페인 목록 요청 성공 E2E 테스트", async () => {
    const res = await request(app).get("/api/content/campaign");

    expect(res.body).toEqual([]);
    expect(res.statusCode).toEqual(200);
  });
});
