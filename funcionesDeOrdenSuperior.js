// FUNCION FLECHA

//-----------const funcionFlecha = () => {} 
//Funcion flecha explicita: Va con llaves y si o si 
// me tiene que devolver algo (return) 
// dentro de los parentesis van los parametros


//------------const funcionFlecha2 = () => a 
// Funcion flecha implicita: No va con llaves. Despues de la flecha pongo la tarea 
// que va a realizar la funcion  
// dentro de los parentesis van los parametros 


// FUNCIONES DE ORDEN SUPERIOR 
// Funciones que reciven como parametro otra funcion
// let array = []
// array.map()
// array.filter()
// array.find()
// array.reduce()


//---------------------------------------------------------------------EJERCICIO 1--------------------------------------------
// función printMessage( mensaje ) {

//     console.log( mensaje )

// }

import { beers } from "./datos.js"
//const printMessage = (message) => console.log(message)

//---------------------------------------------------------------------EJERCICIO 2--------------------------------------------
// const createMultiplication = (number1, number2) => {
//     let result = number1 * number2
//     return result
// } 

// //---------------------------------------------------------------------EJERCICIO 3--------------------------------------------
// const array = [1,2,3,4,5,6,7,8,9]

// //let mostrarArray = array.map(mostrar = (number) => {console.log(number)})

// console.log(beers[0].name)

//---------------------------------------------------------------------EJERCICIO 4--------------------------------------------
// beers.sort((a,b) => a.abv - b.abv) 
// ordeno el array de menor a mayor teniendo en cuenta el valor que tiene 
// la propiedad "abv" el cual me indica el grado de alcohol


// Una vez ordenado guardo los ultimos 10 objetos los cuales son los 10 con mayor grado de alcohol, dentro de una 
// nueva variable de tipo array donde le agrego el "nombre de la bebida" y "el abv: grado de alcohol"
// let ultimas10cerbezasConMasAlcohol = beers.reduce((acc, obj, index) => 
// {
//     if(index >= beers.length -10){
//         acc.push(obj.name, obj.abv) //
//     }
//     return acc
// }, [])

// console.log(ultimas10cerbezasConMasAlcohol)

//---------------------------------------------------------------------EJERCICIO 5--------------------------------------------
// beers.sort((a,b) => a.ibu - b.ibu)

// let las10cerbezasMenosAmargas = beers.reduce((acc, obj, index) => 
//     {
//         if(index < beers.length -15){
//             acc.push(obj.name, obj.ibu) 
//         }
//         return acc
//     }, [])

//     console.log(las10cerbezasMenosAmargas)

//---------------------------------------------------------------------EJERCICIO 6--------------------------------------------
// function encontrarBebida (array,nombre)
// {
//     let bebidaEncontrada
//     if(bebidaEncontrada = array.find(bebida => bebida.name == nombre))
//     {
//         return bebidaEncontrada
//     }
//     else
//     {
//         return "Bebida no encontrada"
//     }
// }

// let mostrarBebias = beers.map(bebida => bebida.name)

// console.log("--------------BEBIDAS DISPONIBLES----------")
// for (const nombre in mostrarBebias) {
//     console.log(mostrarBebias[nombre])
// }
// //console.log(mostrarBebias)
// let respuestaUsuario = prompt("Ingrese nombre de bebida: ")
// console.log(encontrarBebida(beers, respuestaUsuario))

//---------------------------------------------------------------------EJERCICIO 7--------------------------------------------
// function buscarPorNumeroDeibu (array, valor)
// {
//     let ibuEncontrado
//     if  (ibuEncontrado = array.find(bebida => bebida.ibu == valor))
//     {
//         let ibus = beers.reduce((acc, obj, index) => 
//             {
//                 if(obj.ibu == respuestaUsuario){
//                     acc.push(obj) //
//                 }
//                 return acc
//             }, [])
//         return ibus
//     }
//     else
//     {
//         return console.log(`No existe una cerveza con un ibu de [${valor}]`)
//     }
// }
// let mostrarIBUdeBebias = beers.map(ibu => ibu.ibu)

// console.log("NUMERO DE IBUS")
// for (const ibu in mostrarIBUdeBebias) {
//     console.log(mostrarIBUdeBebias[ibu])
// }


// let respuestaUsuario = Number(prompt("Ingrese valor de IBU"))

// console.log(buscarPorNumeroDeibu(beers, respuestaUsuario))

//---------------------------------------------------------------------EJERCICIO 8--------------------------------------------

// function encontrarIndiceBebida(array, nombre) {
//     // Usar .findIndex() para encontrar el índice del objeto con el nombre dado
//     let indice = array.findIndex(bebida => bebida.name === nombre);

//     // Verificar si se encontró la bebida
//     if (indice !== -1) {
//         return console.log("El indice de la cerveza " + nombre + " es: " + (indice+1))
//     } else {
//         return "Bebida no encontrada"
//     }
// }

// let respuestaUsuario = prompt("Ingrese nombre de cerveza")
// console.log(encontrarIndiceBebida(beers, respuestaUsuario))

//---------------------------------------------------------------------EJERCICIO 9--------------------------------------------

//beers.sort((a,b) => a.abv - b.abv) 

// function cervezasConNivelDeAlcoholMenoresA (array, valor)
// {
//     let auxArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].abv < valor) {
//             auxArray.push(array[i].name, array[i].abv, array[i].ibu)
//         }

//     }
//     return auxArray
// }
// console.log(beers.length)
// console.log(beers[0].abv)
// let mostrarABVBebias = beers.map(bebida => bebida.abv)
// console.log("--------------VALORES DE ABV----------")
// for (const abv in mostrarABVBebias) {
//     console.log(mostrarABVBebias[abv])
// }

// let respuestaUsuario = Number(prompt("Ingrese nivel de alcohol"))

// console.log(cervezasConNivelDeAlcoholMenoresA(beers, respuestaUsuario))

//---------------------------------------------------------------------EJERCICIO 10--------------------------------------------

function ordenarYReducir(beers, clave, boolean, limite = 10) {
    
    if (boolean) {
     // Ordenar las cervezas por la clave dada
     beers.sort((a, b) => a[clave] - b[clave]);
     // Reducir el array ordenado a los primeros `limite` elementos
     let ordenadoDeFormaAscendente = beers.reduce((acc, obj, index) => {
        if (index < limite) {
            acc.push({
                nombre: obj.name,
                [clave]: obj[clave]
            });
        }
        return acc;
    }, []);

    // Devolver el array reducido
    return ordenadoDeFormaAscendente;   
    }
    else
    {
        beers.sort((a, b) => a[clave] - b[clave]);
        beers.reverse()
        let ordenadoDeFormaDescendente = beers.reduce((acc, obj, index) => {
            if (index < limite) {
                acc.push({
                    nombre: obj.name,
                    [clave]: obj[clave]
                });
            }
            return acc;
        }, []);
    
        // Devolver el array reducido
        return ordenadoDeFormaDescendente; 
    }
}

function mostrarOrdenadoAscendenteOdescendente(array,string,boolean)
{
    if (boolean) {
        let resultadoAscendente = ordenarYReducir(array, string,boolean)
        console.log(resultadoAscendente)
        console.log(`Ordenados de forma ascendente por la propiedad: [${string}]`)
        resultadoAscendente.forEach(item => {
        console.log(`Nombre: [${item.nombre}] [${string}]: [${item[string]}]`)
        })
        return resultadoAscendente  
    }
    else
    {
        let resultadoDescendente = ordenarYReducir(array, string, boolean)
        console.log(`Ordenados de forma descendente por la propiedad: [${string}]`)
        resultadoDescendente.forEach(item => {
        console.log(`Nombre: [${item.nombre}] [${string}]: [${item[string]}]`)
        })
        return resultadoDescendente
    }
}

function ordenarAscendenteOdescendente(array, string, bool) {
    switch (string) {
        case "id":
                console.log(ordenarYReducir(array,string,bool))
                mostrarOrdenadoAscendenteOdescendente(array,string,bool)
            break;

        case "abv":
            console.log(ordenarYReducir(array,string,bool))
                mostrarOrdenadoAscendenteOdescendente(array,string,bool)
            break;

        case "ibu":
            console.log(ordenarYReducir(array,string,bool))
                mostrarOrdenadoAscendenteOdescendente(array,string,bool)
            break;

        case "target_fg":
            console.log(ordenarYReducir(array,string,bool))
                mostrarOrdenadoAscendenteOdescendente(array,string,bool)
            break;

        case "target_og":
            console.log(ordenarYReducir(array,string,bool))
                mostrarOrdenadoAscendenteOdescendente(array,string,bool)
            break;

        case "ebc":
            console.log(ordenarYReducir(array,string,bool))
                mostrarOrdenadoAscendenteOdescendente(array,string,bool)
            break;

        case "srm":
            console.log(ordenarYReducir(array,string,bool))
                mostrarOrdenadoAscendenteOdescendente(array,string,bool)
            break;

        case "ph":
            console.log(ordenarYReducir(array,string,bool))
                mostrarOrdenadoAscendenteOdescendente(array,string,bool)
            break;

        case "attenuation_level":
            console.log(ordenarYReducir(array,string,bool))
                mostrarOrdenadoAscendenteOdescendente(array,string,bool)
            break;

        default:
            console.log("Nombre de la propiedad no valida")
            break;
    }
}
let respuestaUsuarioPropieda = prompt(`Ingrese la propiedad que quire ordenar:
    id 
    abv
    ibu
    target_fg
    target_og
    ebc
    srm
    ph
    attenuation_level`)
let respuestaUsuarioBool = confirm("Para ordenar de forma ascendente presione aceptar o para ordenar de forma descendente precione cancelar")
// console.log(respuestaUsuarioBool)
// console.log(respuestaUsuarioPropieda)
ordenarAscendenteOdescendente(beers,respuestaUsuarioPropieda,respuestaUsuarioBool)
// id: 4,
// abv: 6.3,
// ibu: 55,
// target_fg: 1012,
// target_og: 1060,
// ebc: 30,
// srm: 15,
// ph: 4.4,
// attenuation_level: 80,
//---------------------------------------------------------------------EJERCICIO 11---------------------------------------------------


