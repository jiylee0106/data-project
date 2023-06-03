import request from "supertest";
import { app } from "../../src";

describe("registerE2ETest", () => {
  it("로그인 성공 E2E 테스트", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "test@gmail.com", password: "test1234!@" });

    expect(res.body.token).toBeDefined();
    expect(res.statusCode).toEqual(201);
  });

  it("로그인 이메일 실패 E2E 테스트", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "test@gmail.com2", password: "test1234!@" });

    expect(res.body.message).toEqual("존재하지 않는 계정입니다");
    expect(res.statusCode).toEqual(401);
  });

  it("로그인 비밀번호 실패 E2E 테스트", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "test@gmail.com", password: "test1234!@@" });

    expect(res.body.message).toEqual("비밀번호가 일치하지 않습니다");
    expect(res.statusCode).toEqual(401);
  });
});
