//Herança de classes

class Person {
      age = 0

      constructor (name){
            this.name = name;
      }

      sayHi(){
            console.log(`${this.name} diz Oi`);
      }
}

class Student extends Person{
      
      constructor(name, id){
            super(name);
            this.id = id;
      }

      sayHello(){
            super.sayHi();
      }
}

let p1 = new Student("Kaio", 1232);
p1.age = 20

p1.sayHello();


console.log(`${p1.name} tem ${p1.age} anos`);