const Mamalia = require("../model/animal");
class MamaliaService {
  constructor() {
    this.mamaliaModel = new Mamalia();
  }
  getSuara() {
    this.mamaliaModel.suaraAnimal();
  }
  async getAll() {
    return await this.mamaliaModel.findAll();
  }
  async store(body) {
    if (body.type == "Mamalia") {
      const mamalia = new Mamalia(body.name, body.type, body.habitat);
      await this.mamaliaModel.save(mamalia);
    } else {
      console.log("Maaf, hewan bukan mamalia");
    }
  }
}
module.exports = MamaliaService;
