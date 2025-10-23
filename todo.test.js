const TodoApp = require("./todo");

describe("TodoApp (versi console)", () => {
  let app;

  beforeEach(() => {
    app = new TodoApp();
  });

  test("Add task", () => {
    app.addTask("Learn Node.js");
    expect(app.tasks.length).toBe(1);
    expect(app.tasks[0].text).toBe("Learn Node.js");
    expect(app.tasks[0].done).toBe(false);
  });

  test("Toggle task", () => {
    app.addTask("Learn Jest");
    app.toggleTask(1);
    expect(app.findById(1).done).toBe(true);
  });

  test("Delete task", () => {
    app.addTask("Learn OOP");
    app.deleteTask(1);
    expect(app.tasks.length).toBe(0);
  });

  test("Do not add empty tasks", () => {
    app.addTask("");
    expect(app.tasks.length).toBe(0);
  });

 test("Handle invalid toggle index", () => {
    app.addTask("Learn Jest");
    app.toggleTask(0);  
    expect(app.findById(1).done).toBe(false);
 });

 test("Delete text for invalid index", () => {
    app.addTask("Learn Jest");
    app.deleteTask(0);
    expect(app.tasks.length).toBe(1);
  });

  test("return defined for existing task", () => {
    app.addTask("Learn Jest");
    const task = app.findById(1);
    expect(app.findById(1)).toBeDefined();
  });

  test("Find by ID return undefined for invalid id(0)", () => {
    app.addTask("Learn Jest");
    const task = app.findById(0);
    expect(task).toBeUndefined();

  });

  test("Find by ID return undefined for non-existing id", () => {
    app.addTask("Learn Jest");
    const task = app.findById(6);
    expect(task).toBeUndefined();
  });




});
