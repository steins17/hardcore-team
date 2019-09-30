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
    saludar: function () { //funcion anonima
        return `${this.primerNombre} , ${this.segundoApelligo}`
    },
    presentacion: function () {
        return `Hola soy ${this.primerNombre} ${this.segundoApelligo} y tengo ${this.edad} mi hobbie es ${this.hobiies} y vivo en la calle ${this.direecion.callePrincipar} `
    }
}

