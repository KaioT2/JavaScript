//Orientação a objetos - Conceitos básicos


class Person{//Classe

      _age = 0;
      steps = 0;

      constructor(name, age){  //Construtor
            this.name = name;
            this.age = age;
      }

      takeAStep(){  //Ação
            this.steps++;
      }

      //Gets e Sets

      get age(){
            return this._age;
      }

      set age(x){
            if(typeof x === 'number'){
                  this._age = x;
            }
      }


}

let p1 = new Person("João", 20);  //Instanciação
let p2 = new Person("Maria", 30);//Instanciação
let p3 = new Person("Pedro", 40)//Instanciação

p1.takeAStep();
p1.setAge(22)

console.log(`Passos de João: ${p1.steps}; Idade de João: ${p1.age}`);