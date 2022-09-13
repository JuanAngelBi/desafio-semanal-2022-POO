class Factorial {
    constructor(numero) {
        this.numero = numero
    }

    obtFactorial() {
        let resultado = this.numero
        for(var i=(this.numero)-1; i>=1; i--) {
            resultado = resultado * i
        }
        return "El factorial de " + this.numero + " es " + resultado
    }
}

let numero = new Factorial(5)
console.log(numero.obtFactorial())