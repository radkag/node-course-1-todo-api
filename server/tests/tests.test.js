const expect = require("expect");
const request = require("supertest");

const {app} = require("../server");
const {Todo} = require("../models/todo");

beforeEach((done) => {
    Todo.remove({}).then(() => done());
});

describe("POST /todos", () => {
    it("should create new todo", (done) => {
        const completed = false;

        request(app)
            .post("/todos")
            .send({completed})
            .expect(200)
            .expect((res) => {
                expect(res.body.completed).toBe(completed)
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].completed).toBe(completed);
                    done()
                }).catch((err) => done(err))
            });
    });

    // Following test works only if completed is required field
    xit("should not create todo with invalid body data", (done) => {
        request(app)
            .post("/todos")
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(0);
                    done()
                }).catch((err) => done(err))
            });
    });
});