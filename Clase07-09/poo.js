class Vehiculo {
    constructor(modelo, cantRuedas, color, velocidad){ //Se tiene por lo menos 4 metodos (hay 16 minimo, 4x4)
        this.modelo = modelo
        this.camtRuedas = cantRuedas
        this.color = color
        this.velocidad = velocidad
    }

    get colorVehiculo () {
        //Es para obtener un dato, no se asigna. Get,set, delete, update, 
        return "Este vehiculo es de color" + this.color
    }
}
//Polimorfismo: Un metodo puede tener diferentes funciones dependiendo dle objeto.
//Ej: No es lo mismo el metodo acelerar() en un auto que el mismo metodo en una bic

//El new permite instanciar la clase, despues usar set para asignar los valores a los atributos