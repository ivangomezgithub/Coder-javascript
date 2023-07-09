//constructor de habitaciones =>
export class habitaciones{
    constructor (id, nombre, descripcion, precio, img, tipo) {
        this.id= id,
        this.nombre= nombre,
        this.descripcion= descripcion,
        this.precio= precio,
        this.img= img,
        this.tipo = tipo;
    }
}


export function productosIniciales (arrayHabitaciones) {


    //PRECIOS HABS OBJ
    const precios = {
        sencilla: 480000,
        doble: 650000,
        familiar: 980000,
    
    };
    
    
    //arrray tipos de habitaciones
    let tipo = ["sencilla", "doble", "familiar", "deluxe"];
    
    
    
    
    
    
    const hab402 = new habitaciones ("402a", "Paraiso", "hab sencilla para una o dos persona", precios.sencilla, "hab402.jpg", tipo[0], )
    arrayHabitaciones.push(hab402);
    const hab602a = new habitaciones ("602a", "El Dorado", "la mejor hab del hotel", precios.sencilla, "hab602a.jpg", tipo[0], )
    arrayHabitaciones.push(hab602a);
    const hab702b = new habitaciones ("702b", "la Eterna primaver", "habitación doble, ideal para pasear en pareja", precios.doble, "hab702b.jpg", tipo[2] )
    arrayHabitaciones.push(hab702b);  
    }
    