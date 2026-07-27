const nombre = prompt("Ingrese su nombre:");

// Función de salida: muestra en consola el mensaje recibido.
const mostrarMensaje = (mensaje) => {
    console.log(mensaje);
};

// Función de entrada: solicita y devuelve la opción elegida.
function pedirOpcion(numeroCafe) {
    const opcionCafe = Number(
        prompt(
            "Café " + numeroCafe +
            ": ingrese 1 con azúcar o 2 sin azúcar:"
        )
    );

    return opcionCafe;
}

// Función de procesamiento: interpreta la opción y devuelve un resultado.
// No muestra mensajes directamente, por eso es más modular y reutilizable.
const procesarOpcion = function (numeroCafe, opcionCafe) {
    if (opcionCafe === 1) {
        return "Café " + numeroCafe + " con azúcar";
    } else if (opcionCafe === 2) {
        return "Café " + numeroCafe + " sin azúcar";
    } else {
        return "Opción inválida";
    }
};

const cantidadCafe = Number(
    prompt("Ingrese la cantidad de cafés que desea comprar:")
);

for (
    let numeroCafe = 1;
    numeroCafe <= cantidadCafe;
    numeroCafe++
) {
    const opcionCafe = pedirOpcion(numeroCafe);

    // Procesamos la opción y guardamos el texto que retorna la función.
    const resultado = procesarOpcion(numeroCafe, opcionCafe);

    // La función de salida se ocupa de mostrar el resultado.
    mostrarMensaje(resultado);
}

alert(nombre + ", tu pedido fue registrado");
