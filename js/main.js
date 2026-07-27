const nombre = prompt("Ingrese su nombre:");

const mostrarMensaje = (mensaje) => {
    console.log(mensaje);
};

function pedirOpcion(numeroCafe) {
    const opcionCafe = Number(
        prompt(
            "Café " + numeroCafe +
            ": ingrese 1 con azúcar o 2 sin azúcar:"
        )
    );

    return opcionCafe;
}

const procesarOpcion = function (numeroCafe, opcionCafe) {

    if (opcionCafe === 1) {
        mostrarMensaje("Café " + numeroCafe + " con azúcar");
    } else if (opcionCafe === 2) {
        mostrarMensaje("Café " + numeroCafe + " sin azúcar");
    } else {
        mostrarMensaje("Opción inválida");
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
    procesarOpcion(numeroCafe, opcionCafe);
    
}

alert(nombre + ", tu pedido fue registrado");