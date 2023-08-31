const fs = require("node:fs/promises");
class Animal {
  constructor(name, type, habitat) {
    this.name = name;
    this.type = type;
    this.habitat = habitat;
  }

  suaraAnimal() {
    console.log("ROar");
  }

  async connect() {
    const file = await fs.readFile("./database/mamalia.json", { encoding: "utf-8" });
    return JSON.parse(file);
  }

  async findAll() {
    try {
      return await this.connect();
    } catch (error) {
      console.error(error);
    }
  }

  async save(body) {
    try {
      const data = await this.connect();
      data.push(body);
      await fs.writeFile("./database/mamalia.json", data);
    } catch (error) {
      console.error(error);
    }
  }
}

class Mamalia extends Animal {}
module.exports = Mamalia;
