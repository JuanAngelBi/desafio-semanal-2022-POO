class Armstrong {
    constructor(numero) {
        this.numero = numero
    }

    esNumArmstrong() {
        let resultado = String(this.numero).split('').map(c => parseInt(c)).reduce((a, d) => {
                return a + Math.pow(d, String(this.numero).length)
        }, 0)
            
        if (resultado == this.numero) {
            return this.numero + " es número Armstrong"
        }
        else {
            return this.numero + " no es número Armstrong"
        }
    }
}

let numero = new Armstrong("320")
let numero2 = new Armstrong("8208")
console.log(numero.esNumArmstrong())
console.log(numero2.esNumArmstrong())