
const arrayCarrito = JSON.parse(localStorage.getItem("Carrito")) || [];

//ARRAY HABS con OBJ
const arrayHabitaciones = [];

//SE DECLARA EL PARAMETRO DE ARRAY HABS
productosIniciales (arrayHabitaciones);


//IMPORT PRODUCTOS DE .CLASES
import {productosIniciales,habitaciones} from './clases.js';


const app = document.querySelector("#app");
const buttonCarrito = document.querySelector("#btn-Carrito")
buttonCarrito.addEventListener("click",()=>{
})

let productoEncontrado = {};


const input = document.querySelector("#search");

input.addEventListener("input",(event) => {
    productoEncontrado = arrayHabitaciones.find(el => el.id === event.target.value)   
})

input.addEventListener("keypress",(event)=>{
   (event.key === "Enter" && productoEncontrado) && console.log("el producto es:",productoEncontrado) 
})




buttonCarrito.addEventListener ("click", () => {

    app.innerHTML = ``
    arrayCarrito.forEach(el => {

        const card = document.createElement("div");
        card.classList.add("cardPreciosItems");
        card.innerHTML = `
                            <img src="/images/hab/${el.img}" alt="${el.descripcion}" style="width:100%">
                            <br><br>
                            <h4> <b>HABITACIÓN ID: ${el.id}</b></h4>
                            <p>${el.descripcion}</p>
                            <h5><strong>$${el.precio}</strong></h5>
                            `;
        
            
        app.appendChild(card);

    })
});



//function ver array productor for each () en app
arrayHabitaciones.forEach( (el) => {
    const card = document.createElement("div");
    card.classList.add("cardPreciosItems");
        card.innerHTML = `
                        <img src="/images/hab/${el.img}" alt="${el.descripcion}" style="width:100%" >
                        <br><br>
                        <h4> <b>HABITACIÓN ID: ${el.id}</b></h4>
                        <p>${el.descripcion}</p>
                        <h5><strong>$${el.precio}</strong></h5>
                        `;
        const buttonAgregar =   document.createElement("button");
        buttonAgregar.innerText = "Agregar a Carrito";
        buttonAgregar.classList.add  ("btn","btn-primary");

            //Evento button
        buttonAgregar.addEventListener("click",()=>{
            arrayCarrito.push(el);
            localStorage.setItem("Carrito",JSON.stringify(arrayCarrito));
        })

        card.append(buttonAgregar);
    app.append(card);
});

