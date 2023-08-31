const MamaliaController = require("./class/controller/mamalia.controller")
async function main(){
    try {
        const mamaliaController = new MamaliaController()
        mamaliaController.getSuara()
        const mamalias = await mamaliaController.getAll()       
        console.log(mamalias);
    } catch (error) {
        console.error(error);
    }

}
main()