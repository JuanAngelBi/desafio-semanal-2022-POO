class Person {                                  //Clase, es como un modelo de objeto
    constructor(name, lastname) {               //Constructor con atributos
        this.name = name                        //Atributos con 'this.'
        this.lastname = lastname
    }   

    greet() {
        return 'Hello, I am ' + this.name + ' ' + this.lastname
    }
}

const user = new Person('joe', 'ray')           //Se crean objetos
const user2 = new Person('ryan', 'ray')

console.log(user.greet())
console.log(user2.greet())
