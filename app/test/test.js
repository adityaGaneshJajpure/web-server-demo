require("should");
const supertest = require("supertest");

// This agent refers to PORT where program is runninng.
const server = supertest.agent("http://localhost:4000");

// UNIT test begin
describe("REST API unit tests", function () {
    it("should return 200 status", function (done) {
        server
            .get("/api/v1/info")
            .expect("Content-type", /json/)
            .expect(200) // This is HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                done();
            });

    });

    it("should return 404 as URL does not exist", function (done) {
        server
            .get("/api/v1/users")
            .expect(404) // This is HTTP response
            .end(function (err, res) {
                // HTTP status should be 404
                res.status.should.equal(404);
                done();
            });
    });
});
