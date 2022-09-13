class Palindromo {
    constructor(palabra) {
        this.palabra = palabra
    }

    esPalindromo() {
        let arrayPalabra = (this.palabra).split("")    //Se convierte la cadena en array
        let alrevez = arrayPalabra.reverse()           //Se da vuelta ese array

        if(this.palabra == alrevez.join("")) {         //El .join convierte el array en str
            return "Si es Palíndromo"
        }
        else {
            return "No es Palíndromo"
        }
    }
}