//funcion entrega de arrys y  objeto
const nombreCliente = [];
for (let i = 1; i <= 20; i++) {
    let cantidad = 1;
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


// para eventos

let tipoEvento = document.getElementById("tipoEvento");
let userSeleccion = document.getElementById("userSeleccion");
let result1 = document.getElementById("result");


tipoEvento.onchange() => {
    result1.innerText = tipoEvento.value
}


// json



localStorage.setItem("listaArticulos", JSON.stringify(Articulos));
class Articulo {}
constructor(obj) {
    this.nombre = obj.Articulo.toUpperCase();
    this.precio = parseFloat(obj.precio);

}

restaDescuento() {
    this.precio = this.precio * 0.95;
}

const almacenados = json.parse(localStorage.getItem("listaArticulos"));
const newArticulos = [];
for (const objeto of almacenados)
    articulos.push(new Articulo(objeto));
for (const articulo of articulos)
    producto.restaDescuento();
console.log(newArticulos)

// libreria
let click_1 = document.getElementById("click_1");
let click_2 = document.getElementById("click_2");
let result = document.getElementById("result");

click_1.onclick = () => {
    Toastify({
        text: "Aqui vamos",
        duration: 4000,
        gravity: `top`,
        position: "absolute",
        className: `notification my-toast`,

    }).showToast();
}

click_2.onclick = () => {
        Toastify({
            text: "Aqui vamos",
            duration: 5000,
            gravity: `top`,
            position: "absolute",
            className: `notification my-toast`,

        }).showToast();
    }
    //para fetch
fetch()
    .then((response) => console.log(response.json()))
    .then((json) => console.log(json))
    .then(data => {
        data.forEach(post => {
            const li = document.createElement("li");
            li.textContent = post.title;
            listado.appendChild(li);
        })
    })



//para formulario 


const addNewClient = () => {
    let listaClient = document.getElementById("Client")
    let userName = document.getElementById("nombreFormulario").value;
    let userNumber = document.getElementById("numeroFormulario").value;
    let userEmail = document.getElementById("emailformulario").value;
    let userMessage = document.getElementById("mensajeFormulario").value;


    let nuevoCliente = document.createElement("li");
    nuevoCliente.innerHTML = < h2 > $ { userName } - $ { userEmail } < /h2>;


    listaClient.append(nuevoCliente);
}