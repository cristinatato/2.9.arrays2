'use strict';

// Hemos creado una aplicación para gestionar un listado de tareas: ¡somos gente muy ocupada! Para eso, hemos creado un objeto literal con el listado de tareas y su estado. Nuestra misión es:
// Mostrar una frase que indique cuántas tareas hay.
// Pintar todas las tareas en pantalla.
// Tachar las ya realizadas.
// Permitir marcar una tarea como 'completa' o 'incompleta'.
// Vamos a partir de este array de datos en nuestro fichero JavaScript:

//   Veamos como afrontar un ejercicio de este tipo, dónde tenemos que unir muchos de los conceptos aprendidos hasta ahora, la organización es clave:
// a) Vamos a por una tarea. Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado.
// b) Listado de tareas. ¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado, cada una de las tareas completadas debe aparecer tachada.
// c) Vamos a darle dinamismo. Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un input de tipo checkbox al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado (checked). Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:
// la tarea debe mostrarse como completada (tachada)
// debemos modificar su estado (propiedad completed) en el array tasks.
// d) Tareas totales. No nos podemos olvidar de los detalles. Añadamos por encima del listado de tareas una frase que diga: Tienes X tareas. Y completadas y Z por realizar. Cada vez que una tarea se marque/desmarque deberiamos actualizar esta información.

const list = document.querySelector('.list');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false,}
    ];

for (let i=0; i<tasks.length; i++) {
    list.innerHTML += `
    <li class="item ${i}">${tasks[i].name}<input type="checkbox" name="checkbox" id="${i}" class="input"></li>`;

    const li= document.querySelectorAll('.item');
    for (let items of li) {
        items.addEventListener('change', line);  
    }

    if (tasks[i].completed===true) {


        //let index = items.classList[1];
        //     for(){
        //         if(tasks[index].completed ===true){
        //             items.classList.add('complete');
        //         }
        //     }
        // }
    }
}    
function line(event){
console.log ('erkjthk');
const yo = event.currentTarget;
console.log(yo);
const papa = yo.parentElement;
console.log(papa);
event.currentTarget.classList.toggle('complete');
}