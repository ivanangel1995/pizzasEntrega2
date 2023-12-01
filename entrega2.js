// Supongamos que tienes un array de pizzas como el siguiente:
const pizzas = [
    { id: 1, nombre: "Pizza Margarita", precio: 500, ingredientes: ["tomate", "queso", "albahaca"] },
    { id: 2, nombre: "Pizza Pepperoni", precio: 700, ingredientes: ["tomate", "queso", "pepperoni"] },
    { id: 3, nombre: "Pizza Vegetariana", precio: 550, ingredientes: ["tomate", "queso", "pimientos", "cebolla"] },
    // ... otras pizzas ...
  ];
  
  // a) Imprimir las pizzas con id impar
  console.log("Pizzas con id impar:");
  pizzas.filter(pizza => pizza.id % 2 !== 0).forEach(pizza => console.log(pizza));
  
  // b) ¿Hay alguna pizza que valga menos de $600?
  const hayPizzaMenor600 = pizzas.some(pizza => pizza.precio < 600);
  console.log("¿Hay alguna pizza que valga menos de $600?", hayPizzaMenor600 ? "Sí" : "No");
  
  // c) Imprimir el nombre de cada pizza con su respectivo precio
  console.log("Nombre de cada pizza con su respectivo precio:");
  pizzas.forEach(pizza => console.log(`${pizza.nombre}: $${pizza.precio}`));
  
  // d) Imprimir todos los ingredientes de cada pizza
  console.log("Ingredientes de cada pizza:");
  pizzas.forEach(pizza => {
    console.log(`Ingredientes de ${pizza.nombre}:`);
    pizza.ingredientes.forEach(ingrediente => console.log(ingrediente));
  });