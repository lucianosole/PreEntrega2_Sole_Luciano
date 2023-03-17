let usuario = prompt("Ingrese su nombre completo por favor:");
let mensajeHola = "Gracias por ingresar al sistema de cotización vehicular, ";
let opcion = prompt(`${mensajeHola} ${usuario}\n Ingrese una opción:\n 1_Cotizar Nueva Unidad\n 2_Salir`);

class autoNuevo {
    constructor (marca,modelo,precio){
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    }
}

const ford = new autoNuevo("Ford","Eco Sport",5000000);
const fiat = new autoNuevo("Fiat","Pulse",6500000);
const toyota = new autoNuevo("Toyota","Ethios",4500000);
const renault = new autoNuevo("Renault","Capture",8500000);

const arrayAutosNuevos = [ford, fiat, toyota, renault];
let suma = 0
function mostrarAutos(){
    
arrayAutosNuevos.forEach((auto)=>{
    alert(auto.marca +" "+ auto.modelo +" $ "+auto.precio);
});
}

switch (opcion) {
    case "1":
        mostrarAutos();
        let marcaOpcion = prompt("Indique la marca deseada. En caso de no ingresar nada, saldrá del programa.");
        let cuotasOpcion = parseInt(prompt("Indicar en cuantas cuotas desea abonarlo?"));


switch (marcaOpcion) {
    case "Ford":
        const autoSeleccion1 = arrayAutosNuevos.find (auto=>auto.marca ==="Ford");
        suma = autoSeleccion1.precio
        for (let i = 1; i <= parseInt(cuotasOpcion); i = i + 1){
            suma = (suma+((suma * 1.05) / 100));
        }
        alert(`Estimado ${usuario}\nSu vechículo ${autoSeleccion1.marca} ${autoSeleccion1.modelo},\nTiene un costo total de $ ${suma.toFixed(2)},\nCon una financiazón de ${cuotasOpcion} cuotas`);
        break;

    case "Fiat":
        const autoSeleccion2 = arrayAutosNuevos.find (auto=>auto.marca ==="Fiat");
        suma = autoSeleccion2.precio
        for (let i = 1; i <= parseInt(cuotasOpcion); i = i + 1){
            suma = (suma+((suma * 1.05) / 100));
        }
        alert(`Estimado ${usuario}\nSu vechículo ${autoSeleccion2.marca} ${autoSeleccion2.modelo},\nTiene un costo total de $ ${suma.toFixed(2)},\nCon una financiazón de ${cuotasOpcion} cuotas`);
        break;

    case "Toyota":
        const autoSeleccion3 = arrayAutosNuevos.find (auto=>auto.marca ==="Toyota");
        suma = autoSeleccion3.precio
        for (let i = 1; i <= parseInt(cuotasOpcion); i = i + 1){
            suma = (suma+((suma * 1.05) / 100));
        }
        alert(`Estimado ${usuario}\nSu vechículo ${autoSeleccion3.marca} ${autoSeleccion3.modelo},\nTiene un costo total de $ ${suma.toFixed(2)},\nCon una financiazón de ${cuotasOpcion} cuotas`);
        break;

    case "Renault":
        const autoSeleccion4 = arrayAutosNuevos.find (auto=>auto.marca ==="Renault");
        suma = autoSeleccion4.precio
        for (let i = 1; i <= parseInt(cuotasOpcion); i = i + 1){
            suma = (suma+((suma * 1.05) / 100));
        }
        alert(`Estimado ${usuario}\nSu vechículo ${autoSeleccion4.marca} ${autoSeleccion4.modelo},\nTiene un costo total de $ ${suma.toFixed(2)},\nCon una financiazón de ${cuotasOpcion} cuotas`);
        break;

    default:
        break;
}
        break;

    default:
        break;
}


