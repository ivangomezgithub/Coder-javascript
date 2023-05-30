/*

let saludo = prompt ("Hola estas interesado en conseguir habitaciones en medellin");

if (saludo == "si" || saludo== "SI"){
    alert ("estas en el el lugar indicado para conseguir lo que deseas")
}else{
    alert("tenemos las mejores opciones de alojamiento para ti en medellin")
};


let numero = prompt ("regalame un numero");

if (numero >= 1000){
    alert ("el numero es mayor de 1000")
}

let saludo2 = prompt ("saludanos");

if (saludo2 == "hola"){
    console.log    ("hola para ti")
}

let entre10y50 = prompt("regalanos un numero del 1 al 100")
let entreParseado = parseInt (entre10y50);

if (entreParseado >= 10 && entreParseado <= 50){
    alert("el numero que pusiste esta entre 10 y 50")
}

*/

console.log ("clase 3");
//hacer tabla de multiplicar

//let numero = parseInt( prompt ("ingrese numero"));

/*
for (let i = 0; i < 10; i++){
    let resultado = numero  * (i+1);
    console.log(numero + "x" + (i+1) + ":" + resultado)

}

*/

/*

let i = 1;
while (i <= 10){
    let resultado = numero * 1 ;
    console.log(numero + "x" + (i) + ":" + resultado)
    i++;
}

*/



//let nombre = prompt ("ingrese salir para salir");
/*


while(nombre != "salir"){
    console.log ("usted ingreso:" + nombre)
    nombre = prompt ("ingrese salir para salir")
}
*/


/*
do {
    console.log ("usted ingreso:" + nombre)
    nombre = prompt ("ingrese nombre salir para salir")
} while(nombre != "salir");
*/

/*

let opcion = prompt ("1- para mostrar el numero que digitaste, 2- para calcular 10+10, 3- salir");


while (opcion != "ESC"){
    switch (opcion) {
        case "1" :
        console.log ("digitaste el numero 1")
    //mostrar un saludo
            break;
        case "2" :
        console.log ("la suma de 10 + 10 da:" + (10+10))
    //para calcular 10+10
            break;
        case "3" :

            //salir
            break;
        default:
            console.log ("ingreso mal la opcion")
            break;
    }
    opcion = prompt ("1- para mostrar un saludo 2- para calcular 10+10 3- salir")
}

*/






let valorPropio = 2;
let valor =  parseInt (prompt ("hola digita un numero"));

for ( i=0; i<5; i++){
    console.log("vas a ver tu numero sumadole 2:" + (valor + i+2)

}