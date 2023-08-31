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
  async findAll() {
    try {
      return await fs.readFile("./database/mamalia.json",{encoding:"utf-8"});
    } catch (error) {
      console.error(error);
    }
  }
}

class Mamalia extends Animal {}
module.exports = Mamalia;
