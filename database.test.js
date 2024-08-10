const db = require("./database/database");

beforeAll(async () => {
  await db.sequelize.sync({ force: true });
});

test("create person", async () => {
  expect.assertions(1);
  const person = await db.Person.create({
    id: 1,
    firstName: "Bobbie",
    lastName: "Draper",
  });
  expect(person.id).toEqual(1);
});

test("create person1", async () => {
  expect.assertions(1);
  const person = await db.Person.create({
    id: 2,
    firstName: "Ball z",
    lastName: "Dragon",
  });
  expect(person.id).toEqual(2);
});

test("create person", async () => {
  expect.assertions(1);
  const person = await db.Person.create({
    id: 3,
    firstName: "Kouetessa lako",
    lastName: "Faris Brandone",
  });
  expect(person.id).toEqual(3);
});

test("create person", async () => {
  expect.assertions(1);
  const person = await db.Person.create({
    id: 4,
    firstName: "Makou LAKO",
    lastName: "Ines",
  });
  expect(person.id).toEqual(4);
});

test("get person", async () => {
  expect.assertions(2);
  const person = await db.Person.findByPk(1);
  expect(person.firstName).toEqual("Bobbie");
  expect(person.lastName).toEqual("Draper");
});

test("get person1", async () => {
  expect.assertions(2);
  const person = await db.Person.findByPk(2);
  expect(person.firstName).toEqual("Ball z");
  expect(person.lastName).toEqual("Dragon");
});

test("get person3", async () => {
  expect.assertions(2);
  const person = await db.Person.findByPk(3);
  expect(person.firstName).toEqual("Kouetessa lako");
  expect(person.lastName).toEqual("Faris Brandone");
});

test("get person4", async () => {
  expect.assertions(2);
  const person = await db.Person.findByPk(4);
  expect(person.firstName).toEqual("Makou LAKO");
  expect(person.lastName).toEqual("Ines");
});
test("delete person", async () => {
  expect.assertions(1);
  await db.Person.destroy({
    where: {
      id: 1,
    },
  });
  const person = await db.Person.findByPk(1);
  expect(person).toBeNull();
});

afterAll(async () => {
  await db.sequelize.close();
});
