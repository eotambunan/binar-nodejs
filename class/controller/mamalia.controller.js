const MamaliaService= require("../service/mamalia.service")
class MamaliaController{
    constructor(){
        this.mamaliaService = new MamaliaService()
    }
    getSuara(){
        this.mamaliaService.getSuara()
    }
}
module.exports = MamaliaController