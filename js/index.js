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
    if (entradaEdad <= 1 && entradaEdad > 25) {
        alert("usted es joven ");
    } else if (entradaEdad <= 26 > 40 && entradaEdad > 40) {
        alert("le quedan pocos años de juventud ");
    } else if (entradaEdad <= 41 > 65 && entradaEdad > 65) {
        alert("aproveche antes de jubilarse ");
    } else if (entradaEdad <= 66) {
        alert("aproveche los descuentos de  jubilados ");
    }
}