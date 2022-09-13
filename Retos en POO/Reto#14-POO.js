class Armstrong {
    constructor(numero) {
        this.numero = numero
    }

    esNumArmstrong() {
        if (this.numero <= 100 || numero > 999) {
            return "El número ingresado debe ser de 3 dígitos"
        }
        else {
            let resultado = String(this.numero).split('').map(c => parseInt(c)).reduce((a, d) => {
                return a + Math.pow(d, 3)
            }, 0)
            //Convierto el numero en array de strings.
            //Con .map convierto en entero otra vez cada caracter usando parseInt. Tengo un array de enteros
            //Funcion reduce(acumulador, digito) va recorriendo y acumulando los cubos de cada digito
            
            if (resultado == this.numero) {
                return this.numero + " es número Armstrong"
            }
            else {
                return this.numero + " no es número Armstrong"
            }
        }
    }
}

let numero = new Armstrong("320")
let numero2 = new Armstrong("371")
console.log(numero.esNumArmstrong())
console.log(numero2.esNumArmstrong())