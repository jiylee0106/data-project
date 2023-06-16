import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

describe("포인트 테이블 비우기", () => {
  it("포인트 테이블 비우기", async () => {
    await prisma.pointsLog.deleteMany();
  });
});
