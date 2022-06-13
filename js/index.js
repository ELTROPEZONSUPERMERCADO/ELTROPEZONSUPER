/*let entradaNombre = prompt('Ingresar su nombre');
let entradaEdad = +(prompt('Ingresar su edad'));
let entradaOferta = prompt(`Desea recibir oferta? Si o no`)
if (entradaNombre == "") {
    alert("No ingreso su nombre");
    let entradaNombre = prompt('Ingresar su nombre');
    alert("Hola " + entradaNombre + " " + " a Supermercado El Tropezon online");
} else {
    alert("Hola " + entradaNombre + " " + " a Supermercado El Tropezon online");
}
0

for (let i = 0; i < 1; ++i) {
    if (entradaEdad >= 66) {
        alert("aproveche los descuentos de jubilados  ");
    } else if (entradaEdad <= 66) {
        alert("aproveche los descuentos  ");
    }
}

for (let i = 0; i < 1; ++i) {
    if (entradaOferta == "si") {
        alert("envie quiero ofertas al 1573638071");
    } else {
        alert("gracias");
    }
}

//funcion para entrega  1
let tropePuntos = 0;
let numeroTran = parseInt(prompt(`nro de trans`));
let puntos;
let tipoTran;

for (let i = 0; i < numeroTran; ++i) {
    tipoTran = prompt(`tipo transaccion : sumar o usar`);
    if (tipoTran !== `sumar` && tipoTran !== `usar`) {
        alert(`tipo de transaccion no valido`);
        break;
    }
    puntos = parseInt(prompt(`total de puntos: `));
    if (tipoTran === `sumar`) {
        tropePuntos = tropePuntos + puntos;
    }
    if (tipoTran === `usar`) {
        tropePuntos = tropePuntos - puntos;
    }
}
alert(`tu saldo final de puntos es :` + tropePuntos);


// funcion para entrega 


function precioFinalProducto(precio) {
    let impuesto = 1.21;
    let envioMasDeDiez = 1000;
    let precioTotal = (precio * impuestos) + envioMasDeDiez;
    return precioTotal;
}
*/

//funcion entrega de arrys y  objeto
const nombreCliente = [];
let cantidad = 10;
do {
    let entrada = prompt("Ingresar nombre completo");
    nombreCliente.push(entrada.toUpperCase());
    console.log(nombreCliente.length);

} while (nombreCliente.length != cantidad)

function Clientes(numeroDeCliente, nombre, formaDePago, tipoDeFactura, domicilio) {
    this.numeroDeCliente = numeroDeCliente;
    this.nombreCliente = nombre.toUpperCase();
    this.formaDePago = formaDePago;
    this.tipoDeFactura = tipoDeFactura;
    this.domicilio = domicilio;
    this.clienteInfo = muestraCliente;
}

const cliente1 = new Clientes("000001", "Claudia Lopez", "efectivo o tarjeta", " factura A ", "Olazabal 4950 1A");
const cliente2 = new Clientes("000002", "Ramiro Funessi", "transferencia o mercado pago", " factura C ", "Andonaegui 2149 4 h");
const cliente3 = new Clientes("000003", "Pedro Lozano", "efectivo ", " factura B ", "Bucarelli 2146 casa");
cliente1.clienteInfo();
cliente2.clienteInfo();
cliente3.clienteInfo();

/*console.log(cliente1)
console.log(cliente2)
console.log(cliente3)*/

function muestraCliente() {
    let resultado = `el cliente ` + this.numeroDeCliente + `se llama ` + this.nombreCliente + ` su forma de pago suele ser ` + this.formaDePago + ` hace ` + this.tipoDeFactura + ` para enviar a la direccion ` + this.domicilio;
    console.log(resultado)

}

console.log(nombreCliente.includes(`Claudia Lopez`))
console.log(nombreCliente.includes(`Ramiro Funessi`))
console.log(nombreCliente.includes(`Pedro Lozano`))
console.log(nombreCliente.includes(`Dante Alianza`))