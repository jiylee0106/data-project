import PushDb from "@src/repository/test/db_push.repository";
const pushDb = new PushDb();

describe("목 데이터 생성", () => {
  it("목 포인트 로그 삽입", async () => {
    const numberOfData = 10000;

    await pushDb.createMockData(numberOfData);
  });
});
