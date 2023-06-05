//saludo

alert ("Hola Bienvenido a nuestro sitio Hotel Torre Primavera")
alert ("Regalanos alguna información para brindarte a primera mano los espacios de alojamiento que tenemos para ti");


//Crear un algoritmo con un condicional.

let nomUsuario = prompt ("Digita tu nombre Completo de lo contrario digita ESC");


if (nomUsuario != "ESC") {
    alert ("hola " + nomUsuario)
}

else (
    alert("Digitaste ESC")
);

//Crear un algoritmo utilizando un ciclo.


let ciudadUsuario = prompt ("Contanos pues de que ciudad eres");

if (ciudadUsuario == "Medellin" || ciudadUsuario == "medellin") {

   for (let i = 0; i < 5; i++) {
  console.log ("Elegiste la ciudad de Medellin donde tenemos estas opciones de Alojamiento para ti 60" + i + "b");
    }
}

else if (ciudadUsuario == "Bogota"){
    console.log ("proximamente Dispondremos de alojamientos en esta ciudad")
}

else {
    alert("Disculpanos no tenemos opciones de alojamiento en la Ciudad de: " + ciudadUsuario);

    while(ciudadUsuario != "medellin") {
        ciudadUsuario = prompt ("Contanos pues de que ciudad eres de lo controrio ingresa la ciudad de medellin si estas interesado en conocer nuestra oferta en esta ciudad")
    }

};



//Armar un simulador interactivo, la estructura final de tu proyecto integrador.
//simula la entrada de datos de 



let valorUno = parseInt (prompt("cuanto es tu presupiesto maximo"))
let valorDos = parseInt (prompt("cuanto es tu presupiesto minimo"))

let estimado = (valorUno + valorDos) / 2;


function rangoPresupuesto (valorUno, valorDos) {
    return valorUno - valorDos
}

alert ("hola " + nomUsuario + "tu presupuesto para tu alojamiento se ajusta en un rango de: " + rangoPresupuesto (valorUno,valorDos));



//simulador precios variando la disponibilidad en cantidad de personas, ademas de sugerir un precio

let cantPersonas = parseInt(prompt("¿Pa cuantos le preparo cama Mijo?"));

if (cantPersonas <=4){
    alert("Nuestras acomodaciones para esta cant de personas tiene un costo de: 480.000 y tu estimado esta en: " + estimado )
}

else if (cantPersonas >=5 & cantPersonas <=8) {
    alert("Nuestras acomodaciones para esta cant de personas tiene un costo de: 780.000 y tu estimado esta en: " + estimado )
}
else if (cantPersonas >=8 & cantPersonas <=12) {
    alert("Nuestras acomodaciones para esta cant de personas tiene un costo de: 180.000 y tu estimado esta en: " + estimado )
}
else {
    alert("Disculpanos no tenemos disponibilidad para esa cantidad de personas, si digitaste por error mas de 12 personas, te volvermos a preguntar")
    cantPersonas = parseInt(prompt("¿Pa cuantos te preparo cama: ?" + nomUsuario));
}