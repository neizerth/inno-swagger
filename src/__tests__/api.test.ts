import app from "@src/server";

import request from "supertest";

describe("GET /ping", () => {
	it("responds with json", () => {
		return request(app)
			.get("/ping")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)
			.then((response) => {
				console.log(response.body);
				expect(response.body.message).toEqual("pong");
			});
	});
});
