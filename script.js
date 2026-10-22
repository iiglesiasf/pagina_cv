const exp_academica = [
{
    "titulo": "GS Desarrollo de Aplicaciones Web",
    "periodo": "2025-27",
    "centro": "CPR Afundación A Coruña"
},
{
    "titulo": "Grado en Creación Digital, Animación y Videojuegos",
    "periodo": "2020-24",
    "centro": "Universidade da Coruña"
}

];

const exp_profesional = [
{
    "titulo": "Colaborador en Hyperbolt Studios",
    "periodo": "Febrero 2025 - Febrero 2026",
    "funciones": [
        "Traducción de ideas creativas en requisitos técnicos viables.",
        "Modelado y optimización de assets para su rendimiento en animación."
    ]

},
{
    "titulo": "Colaborador técnico | GIVAC -UDC | Marzo 2024 - Mayo 2024",
    "periodo": "Marzo 2024 - Mayo 2024",
    "funciones": [
        "Desarrollo de flujos de trabajo para generación procedural de personajes 3D",
        "Gestión del tiempo y cumplimiento de plazos de entrega estrictos."
    ]

}

];



function mostrarExperiencias(experiencias, seccionId) {
const seccion = document.getElementById(seccionId);

// Recorremos las experiencias
experiencias.forEach(experiencia => {
    const articulo = document.createElement("article");

    // Titulo
    const titulo = document.createElement("h3");
    titulo.textContent = experiencia.titulo;
    articulo.appendChild(titulo);

    // Periodo
    const periodo = document.createElement("p");
    periodo.textContent = experiencia.periodo;
    articulo.appendChild(periodo);

    // Centro academico
    if (experiencia.centro) {
        const centro = document.createElement("p");
        centro.textContent = "Centro: " + experiencia.centro;
        articulo.appendChild(centro);
    }

    // Funciones profesionales
    if (experiencia.funciones) {
        const lista = document.createElement("ul");

        experiencia.funciones.forEach(funcion => {
            const elemento = document.createElement("li");
            elemento.textContent = funcion;
            lista.appendChild(elemento);
        });

        articulo.appendChild(lista);
    }

    // Lo añadimos a la seccion
    seccion.appendChild(articulo);
    });
}

// Mostrar datos
mostrarExperiencias(exp_academica, "experiencia-academica");
mostrarExperiencias(exp_profesional, "experiencia-profesional");
