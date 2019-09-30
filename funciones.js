var santiago = {
    primerNombre: 'Santiago',
    segundoApelligo: 'Cordova',
    edad: 25,
    hobiies: [
        'Jugar PUBG',
        'Programar en JS'
    ],
    direecion: {
        callePrincipar: 'John Gabriel Moreno',
        calleSecundaria: 'Hola Mundo'
    },
    saludar: () => `${this.primerNombre} , ${this.segundoApelligo}`//funcion anonima, siempre devuelve algo
    ,
    presentacion: () => `Hola soy ${this.primerNombre} ${this.segundoApelligo} y tengo ${this.edad} mi hobbie es ${this.hobiies}`,
    sumarEdad: () => {//no retorna nada
        santiago.edad++
    },

}


const funcionNormalUno = (nombre) => {
    console.log(`Hola soy ${nombre}`)
}

const funcionNormalDos = (nombre) => `Hola soy ${nombre}`

const funcionQueAceptaOtraFuncion = (nombre, callback) => {
    if (callback) callback(nombre)
}