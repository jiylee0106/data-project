import request from "supertest";
import { app } from "../../src";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Q2QGdtYWlsLmNvbSIsImlkIjo2LCJwcm92aWRlciI6IkxvY2FsIiwicm9sZSI6Ikd1ZXN0IiwiaWF0IjoxNjg2ODM0OTQ2LCJleHAiOjE2ODgwNDQ1NDZ9.ZwOopvTwdEUZODMARAR6Z-AjS5gH2w6zvNMccfPUxMQ";

describe("포인트 충돌 실험", () => {
  it("포인트 충돌 실험", async () => {
    const promises = Array.from({ length: 5 }, () =>
      request(app)
        .put("/api/point")
        .set("Authorization", `Bearer ${token}`)
        .send({ action_type: "Spent", method: "Draw_Degree2" })
    );

    const result = await Promise.all(promises);
    console.log(result[5].body);
  });
});
