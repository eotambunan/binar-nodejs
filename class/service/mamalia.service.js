const Mamalia = require("../model/animal")
class MamaliaService{
    constructor(){
        this.mamaliaModel = new Mamalia()
    }
    getSuara(){
        this.mamaliaModel.suaraAnimal()
    }
    async getAll(){
        return await this.mamaliaModel.findAll()
    }
}
module.exports = MamaliaService