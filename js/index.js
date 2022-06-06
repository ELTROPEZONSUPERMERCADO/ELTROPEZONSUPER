let entradaNombre = prompt('Ingresar su nombre');
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

let plataEnBanco = 0;
let numeroTran = parseInt(prompt(`nro de trans`));
let monto;
let tipoTran;

for (let i = 0; i < numeroTran; ++i) {
    tipoTran = prompt(`tipo transaccion : abonar o retirar`);
    if (tipoTran !== `abonar` && tipoTran !== `retirar`) {
        alert(`tipo de transaccion no valio`);
        break;
    }
    monto = parseInt(prompt(`monto: `));
    if (tipoTran === `Abonar`) {
        plataEnBanco = plataEnBanco + monto;
    }
    if (tipoTran === `retirar`) {
        plataEnBanco = plataEnBanco - monto;
    }
}
alert(`tu saldo final es :` + plataEnBanco);


// funcion para entrega 1 


function precioFinalProducto(precio) {
    let impuesto = 1.21;
    let envioMasDeDiez = 1000;
    let precioTotal = (precio * impuestos) + envioMasDeDiez;
    return precioTotal;
}