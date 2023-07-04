
//PRECIOS HABS OBJ
const precios = {
    sencilla: 480000,
    doble: 650000,
    familiar: 980000,

};

//ARRAY HABS con OBJ
const arrayHabitaciones = [];


//arrray tipos de habitaciones
let tipo = ["sencilla", "doble", "familiar", "deluxe"];


//constructor de habitaciones =>
class habitaciones{
    constructor (id, nombre, descripcion, precio, img, tipo) {
        this.id= id,
        this.nombre= nombre,
        this.descripcion= descripcion,
        this.precio= precio,
        this.img= img,
        this.tipo = tipo
    }
}


const hab402 = new habitaciones ("402", "Paraiso", "hab sencilla para una o dos persona", precios.sencilla, "hab402.jpg", tipo[0], )
arrayHabitaciones.push(hab402);
const hab602a = new habitaciones ("602a", "El Dorado", "la mejor hab del hotel", precios.sencilla, "hab602a.jpg", tipo[0], )
arrayHabitaciones.push(hab602a);
const hab702b = new habitaciones ("702b", "la Eterna primaver", "habitación doble, ideal para pasear en pareja", precios.doble, "hab702b.jpg", tipo[2] )
arrayHabitaciones.push(hab702b);


//funcion mostrar hab sencillas
const mostrarPorCategoria = (tipo) =>{
    const filtro = arrayHabitaciones.filter((el) => el.tipo === tipo);
    let mensajeAmostrar = "";
    filtro.forEach ((el) =>{
        mensajeAmostrar += `\nEl producto elegido es: ${el.id} \n y su precio es: ${el.precio} \nsu categoria es: ${el.tipo}`;
    })
    alert(mensajeAmostrar);
};


const fin = 4;

//funcion mostrar hab
const verProductos = () => {
    let opcion;
    opcion = parseInt(prompt("digita el tipo de espacios que deseas reservar \n sencillo \n doble \n familiar \n  de lo contrario digita fin"));
    
while (opcion != fin) {
    switch (opcion) {
        case 1:
            mostrarPorCategoria("sencilla");
            break;
        case 2:
            mostrarPorCategoria("doble");
            break;
        case 3:
            mostrarPorCategoria("familiar");
            break;
        default:
            alert("ingreso una opcion invalida");
            break;
    }
    opcion = parseInt(prompt("digita el tipo de espacios que deseas reservar \n sencillo \n doble \n familiar \n  de lo contrario digita fin"));
}
}

verProductos();





let contHabitaciones = document.getElementById("habs");

contHabitaciones= document.createElement("div");
contHabitaciones.classList.add("container");
contHabitaciones.innerHTML =`<h1>hola</h1> 
    <p>mundo</p>`;
    


document.body.appendChild(contHabitaciones);



const contPrecios = document.getElementById("habs");

function renderizarProductos2 () {
    for (const habitacion of arrayHabitaciones) {
        let card = document.createElement("div");
        card.classList.add("cardPreciosItems");


        card.innerHTML = `
                            <img src="/images/hab/${habitacion.img}" alt="${habitacion.descripcion}" style="width:30%">
                            <h4> <b>HABITACIÓN ID: ${habitacion.id}</b></h4>
                            <p>${habitacion.descripcion}</p>
                            <p>$${habitacion.precio}</p>
                            <button type="button" class="btn btn-primary" id="btnMasInfo">Agregar a carrito</button>
                            `;
        contPrecios.appendChild(card);
    }   
  
}
renderizarProductos2();


const btnMasInfo = document.querySelectorAll("#btnMasInfo");

console.log(btnMasInfo);


btnMasInfo.forEach ( el => 
    el.addEventListener("click", () => {
        console.log(" estas dando esta cantidad de click")
    } )    
);


