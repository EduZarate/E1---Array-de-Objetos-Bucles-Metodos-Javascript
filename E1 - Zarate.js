// ***********************************          E1 - Array de Objetos, Bucles, Métodos | Javascript          ****************************************

//  Crear el array de objetos "Pizzas".
//  - Debemos crear 6 objetos como mínimo.
//  - Cada objeto debe tener definido su id (1,2,3 etc), nombre, ingredientes (sobre la base) y precio. (Ingredientes debe ser una lista)

let pizzas = [
  {
    id: 1,
    nombre: "Margarita",
    Ingredientes: ["Mozzarella", "Albahaca", "Tomates"],
    precio: 890,
  },

  {
    id: 2,
    nombre: "Hawaiana",
    Ingredientes: ["Ananá", "Mozzarella", "Tomate", "Jamón"],
    precio: 940,
  },

  {
    id: 3,
    nombre: "Marinara",
    Ingredientes: [
      "Tomates",
      "Anchoas",
      "Ajo",
      "Hierbas Aromáticas",
      "Orégano",
      "Aceite de Oliva",
    ],
    precio: 980,
  },

  {
    id: 4,
    nombre: "Pepperoni",
    Ingredientes: ["Pepperoni", "Tomate", "Queso"],
    precio: 900,
  },

  {
    id: 5,
    nombre: "4 Quesos",
    Ingredientes: [
      "Queso Mozzarella",
      "Queso Azul",
      "Queso Gorgonzola",
      "Queso Provolone",
    ],
    precio: 910,
  },

  {
    id: 6,
    nombre: "Napolitana",
    Ingredientes: [
      "Tomates",
      "Mozzarella",
      "Anchoas",
      "Alcaparra",
      "Ajo",
      "Aceite de Oliva",
    ],
    precio: 1000,
  },
];

// console.log(pizzas);

// Crear una iteración del array que imprima en consola:

// A) Las pizzas que tengan un ID impar.

let impares = [];

for (let i = 0; i < pizzas.length; i++) {
  if (pizzas[i].id % 2 !== 0) {
    impares.push(pizzas[i].nombre);
  }
}

console.log(`Las pizzas con ID impares son: ${impares.join(", ")}.`);

// B) ¿Hay alguna pizza que valga menos de $600?

let baratas = [];

for (let q = 0; q < pizzas.length; q++) {
  if (pizzas[q].precio < 600) {
    baratas.push(pizzas[q].nombre);
  }
}

if (baratas.length >= 1) {
  console.log(`Si, hay pizzas por menos de $600`);
} else {
  console.log(`No hay pizzas por menos de $600`);
}

// C) Los nombres de todas las pizzas.

nombresPizzas = [];

for (let y = 0; y < pizzas.length; y++) {
  nombresPizzas.push(pizzas[y].nombre);
}

console.log(
  `La variedad de pizzas disponibles incluyen ${nombresPizzas.join(", ")}`
);

// D) Los precios de todas las pizzas.

preciosPizzas = [];

for (let x = 0; x < pizzas.length; x++) {
  preciosPizzas.push(pizzas[x].precio);
}

console.log(`Los precios de las pizzas son: ${preciosPizzas.join(", ")}`);

// E) El nombre de cada pizza, con su respectivo precio.

for (let z = 0; z < pizzas.length; z++) {
  console.log(
    `El precio de la pizza ${pizzas[z].nombre} es $${pizzas[z].precio}`
  );
}
