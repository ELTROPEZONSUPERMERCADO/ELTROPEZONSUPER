let entradaNombre = prompt('Ingresar su nombre');
let entradaEdad = prompt('Ingresar su edad');
if (entradaNombre == "") {
    alert("No ingreso su nombre");
    let entradaNombre = prompt('Ingresar su nombre');
    alert("Hola " + entradaNombre + " " + " a Supermercado El Tropezon online");
} else {
    alert("Hola " + entradaNombre + " " + " a Supermercado El Tropezon online");
}


for (let i = 0; i < 1; ++i) {
    if (entradaEdad <= 66) {
        alert("aproveche los descuentos  ");
    }
}