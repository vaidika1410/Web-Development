function person(name){
    this.name = name;
}

person.prototype.greet = function(){
    console.log(`hey! my name is ${this.name}`);
}

let Vaidika = new person("Vaidika")
Vaidika.greet();