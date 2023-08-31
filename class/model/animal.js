class Animal {
  constructor(name, type, habitat) {
    this.name = name;
    this.type = type;
    this.habitat = habitat;
  }
  suaraAnimal(){
    console.log("ROar");
  }
}

class Mamalia extends Animal{
}
module.exports=Mamalia
