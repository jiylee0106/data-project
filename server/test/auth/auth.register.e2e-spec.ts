import request from "supertest";
import { app } from "../../src";

describe("registerE2ETest", () => {
  it("회원가입 성공 E2E 테스트", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ email: "test@test.test", password: "test1234!@" });

    expect(res.body.token).toBeDefined();
    expect(res.statusCode).toEqual(201);

    const deleteResult = await request(app)
      .delete("/api/user")
      .set("Authorization", `Bearer ${res.body.token}`);

    expect(deleteResult.statusCode).toEqual(201);
  });

  it("회원가입 중복 이메일 E2E 테스트", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ email: "test@gmail.com", password: "test1234!@" });

    expect(res.body.message).toEqual("이미 존재하는 이메일입니다");
    expect(res.statusCode).toEqual(403);
  });

  it("회원가입 dto 실패 E2E 테스트", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ email: "", password: "" });

    expect(res.body.message).toEqual("유효하지 않은 요청입니다");
    expect(res.statusCode).toEqual(403);
  });
});
