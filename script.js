const valorCadena = "Instituto Alfa Carabobo"
const valorNumerico = 2024
const valorBooleano = true

const valorIndefinido = undefined
const valorNulo = null

const valorList = [
    "Oscar", 
    "Genesys",
    "Manuel",
    "Alexandra",
]

const Usuario = {
    names : "Oscar",
    age : 18,
    email : "Oscar@gmail.com",
    password : "contrasena2025",
    adress : {
        contry : "USA",
        state : "Texas",
        city : "San Antonio",
        streat : "calle 13",
    }
}


if (Usuario.age >= 18) {


    console.log("Se cumple")
} else {
    console.log("No se cumple")
}


console.log("hello world");


    
const myFuncion = (num1 , num2) => {

    const suma = num1 + num2
    
    
    return suma

}

console.log ( myFuncion (7 , 8) )


const validatenumber = (num ) => {
   
if (num % 2 == 0 ){
    return "par"
} else {
    return "impar"
}


console.log(validatenumber(8)) 

}


