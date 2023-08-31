const Mamalia = require("../model/animal")
class MamaliaService{
    constructor(){
        this.mamaliaModel = new Mamalia()
    }
    getSuara(){
        this.mamaliaModel.suaraAnimal()
    }
}
module.exports = MamaliaService