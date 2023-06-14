import request from "supertest";
import { app } from "../../src";

describe("registerMockUser", () => {
  it("유저 5명 생성", async () => {
    for (let i = 1; i < 5001; i++) {
      await request(app)
        .post("/api/auth/register")
        .send({ email: `test${i}@test.test`, password: "test1234!@" });
    }
  });
});
