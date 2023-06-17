import request from "supertest";
import { app } from "../../src";

const token = "";

describe("포인트 충돌 실험", () => {
  it("포인트 충돌 실험", async () => {
    const promises = Array.from({ length: 5 }, () =>
      request(app)
        .put("/api/point")
        .set("Authorization", `Bearer ${token}`)
        .send({ action_type: "Spent", method: "Draw_Degree2" })
    );

    await Promise.all(promises);
  });
});
