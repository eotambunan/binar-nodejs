const MamaliaService = require("../service/mamalia.service");
class MamaliaController {
  constructor() {
    this.mamaliaService = new MamaliaService();
  }
  getSuara() {
    this.mamaliaService.getSuara();
  }
  async getAll() {
    return await this.mamaliaService.getAll();
  }
  async store(body) {
    await this.mamaliaService.store(body);
  }
}
module.exports = MamaliaController;
