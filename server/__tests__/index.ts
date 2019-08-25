import request from "supertest";
import app from "../src/app";

describe("GET /", () => {
    it("returns 200", done => {
        request(app).get("/").expect(200, done);
    });
});
