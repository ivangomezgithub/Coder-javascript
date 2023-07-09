

//ARRAY COLORES
let color = ["amarillo", "azul", "rojo", "negro"];
//ACTUALIZACION DE COLORES
color.push ("verde", "naranja", "violeta" )

//array carrito
const arrayCarrito = []


//FUNCCION SALUDO
function saludo () {
    alert("hola " + personaUno.nombre + " bienvenido a nuestro sitio de reservas de habitación en Medellin")
}


//calculadora
let resultado = 0;
function calculadora(num1, num2, op) {
   if (op == "*") {
    return num1 * num2;
   }
   else if (op == "+") {
    return num1 + num2;
   }
   else if (op == "-") {
    return num1 - num2;
   }
   else if (op == "/") {
    return num1 / num2;
   };
}



//activar la calculadora
//let num1 = parseInt(prompt("digita el Primer numero"))
//let op =(prompt("digita la Op"))
//let num2 = parseInt(prompt("digita el Segundo numero"))

//alert("este es el resultado de la calculadora" + (calculadora(num1,num2,op)));






//ARRAY HABS con OBJ
const arrayHabitaciones = [];

productosIniciales (arrayHabitaciones);



//constructor de habitaciones =>
import {productosIniciales,habitaciones} from "./clases.js";




//funcion mostrar hab sencillas
const mostrarPorCategoria = (tipo) =>{
    const filtro = arrayHabitaciones.filter((el) => el.tipo === tipo);
    let mensajeAmostrar = "";
    filtro.forEach ((el) =>{
        mensajeAmostrar += `\nEl producto elegido es: ${el.id} \n y su precio es: ${el.precio} \nsu categoria es: ${el.tipo}`;
    })
    alert(mensajeAmostrar);
}


const fin = 4;

//funcion mostrar hab
const verProductos = () => {
    let opcion;
    opcion = parseInt(prompt("digita el tipo de espacios que deseas reservar \n sencillo \n doble \n familiar \n  de lo contrario digita fin"));
    
while (opcion != fin) {
    switch (opcion) {
        case 1:
            mostrarPorCategoria("sencilla")
            break;
        case 2:
            mostrarPorCategoria("doble")
            break;
        case 3:
            mostrarPorCategoria("familiar")
            break;
        default:
            alert("ingreso una opcion invalida")
            break;
    }
    opcion = parseInt(prompt("digita el tipo de espacios que deseas reservar \n sencillo \n doble \n familiar \n  de lo contrario digita fin"));
}
}

verProductos();




//Datos del Hotel
const datosHotel = {
    nombreHotel: "Hotel torre primavera",
    descripcionHotel: "El mejor hotel de Medellin, cerca a parque de laureles, zona rosa la 70, universidad pontificia bolivariana y muchas otras comodidades",
    direccionHotel: "nos entramos en la calle 42 # 73 - 42",
    telefonoHotel: "322 694 40 00",
}


//funccion constructora objetos DATOS USUARIO

function datosUsuario(nombre, apellido, edad, dir,correo) {
    this.nombre= nombre,
    this.apellido= apellido;
    this.edad= edad,
    this.dir= dir;
    this.correo = correo;
}


//constructor datos usuario
const personaUno = new datosUsuario(prompt("Cual es tu nombre"), prompt("Cual es tu apellido"), prompt("Cual es tu edad"), prompt("Cual es tu Dirección"), prompt("Cual es tu Correo"), );





////CONSOLE.LOGS
//console.log(precios);
//console.log(Habitaciones);
saludo();
console.log("estos son los datos del usuario:" + " "+ personaUno.nombre + personaUno.apellido +" " + personaUno.correo + " "+ personaUno.edad);
//
//
//console.log(datosHotel.descripcionHotel);
//console.log(color[4]);




//DOM -- DOM -- DOM
console.log(arrayHabitaciones);


//function renderizarProductos () {
//    let listaHabitaciones = document.createElement("ol");
//
//    for (const habitacion of arrayHabitaciones) {
//        let objHabitacion = document.createElement("li");
//        objHabitacion.innerHTML = `ID: ${habitacion.id} | Nombre: ${habitacion.nombre} |  precio: ${habitacion.precio}`;
//        listaHabitaciones.append(objHabitacion)
//    }
//    document.body.append(listaHabitaciones)
//}//
//renderizarProductos ();

const habsRecomendadas = document.getElementById("habsRecomendadas");

function renderizarProductos2 () {
    for (const habitacion of arrayHabitaciones) {
        let card = document.createElement("div");
        card.classList.add("cards", "container")


        card.innerHTML = `<img src="/images/hab/${habitacion.img}" alt="${habitacion.descripcion}" style="width:100%">
                            <div class = "container">
                            <h4> <b> HABITACION ID: ${habitacion.id}</b></h4>
                            <p>${habitacion.descripcion}</p>
                            <p>$${habitacion.precio}</p>
                            <button type="button" class="btn btn-info">Mas Info</button>
                            </div>`;
        habsRecomendadas.append(card);
    }   
  
}
renderizarProductos2();


