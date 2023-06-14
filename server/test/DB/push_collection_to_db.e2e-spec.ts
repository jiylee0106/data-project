import PushDb from "@src/repository/test/db_push.repository";
const pushDb = new PushDb();

describe("목 컬렉션 데이터 생성", () => {
  it("목 컬렉션 데이터 삽입", async () => {
    const numberOfData = 10000;

    await pushDb.createMockCollection(numberOfData);
  });
});
