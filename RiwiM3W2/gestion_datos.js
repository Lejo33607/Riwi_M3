
// GESTIÓN DE DATOS CON OBJETOS, SETS Y MAPS EN JAVASCRIPT

// Archivo: gestion_datos.js

// TASK 1 - CREACIÓN DEL OBJETO DE PRODUCTOS

// Creamos un arreglo de objetos con productos
const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 2500000,
    categoria: "Tecnología"
  },
  {
    id: 2,
    nombre: "Mouse",
    precio: 80000,
    categoria: "Accesorios"
  },
  {
    id: 3,
    nombre: "Teclado",
    precio: 150000,
    categoria: "Accesorios"
  }
];

// TASK 5 - VALIDACIÓN DE PRODUCTOS

// Función para validar un producto
function validarProducto(producto) {
  return (
    producto.id !== undefined &&
    typeof producto.id === "number" &&
    producto.nombre &&
    typeof producto.nombre === "string" &&
    producto.precio !== undefined &&
    typeof producto.precio === "number" &&
    producto.precio > 0
  );
}

// Validamos todos los productos
console.log("VALIDACIÓN DE PRODUCTOS");

productos.forEach((producto) => {
  if (validarProducto(producto)) {
    console.log(`Producto válido: ${producto.nombre}`);
  } else {
    console.log("Producto inválido:", producto);
  }
});

// TASK 2 - USO DE SET

// Creamos un Set con números repetidos
const numeros = new Set([1, 2, 3, 3, 4, 5, 5, 6]);

console.log("\nSET ORIGINAL (SIN DUPLICADOS)");
console.log(numeros);

// Agregar un nuevo número
numeros.add(10);

console.log("\nSET DESPUÉS DE AGREGAR 10");
console.log(numeros);

// Verificar si existe un número
console.log("\nVERIFICAR SI EXISTE EL NÚMERO 3");
console.log(numeros.has(3)); // true

// Eliminar un número
numeros.delete(2);

console.log("\nSET DESPUÉS DE ELIMINAR 2");
console.log(numeros);

// Recorrer Set con for...of
console.log("\nRECORRIENDO EL SET");

for (const numero of numeros) {
  console.log(numero);
}

// TASK 3 - CREACIÓN DE MAP

// Creamos un Map para relacionar categoría y producto
const categoriasProductos = new Map();

// Agregamos productos al Map
productos.forEach((producto) => {
  categoriasProductos.set(producto.categoria, producto.nombre);
});

console.log("\nMAP DE CATEGORÍAS Y PRODUCTOS");
console.log(categoriasProductos);

// TASK 4 - ITERACIÓN SOBRE ESTRUCTURAS

// 1. for...in para recorrer propiedades de un objeto
console.log("\nRECORRIENDO OBJETOS CON for...in");

productos.forEach((producto) => {
  console.log(`\nProducto ID: ${producto.id}`);

  for (const propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
  }
});

// 2. for...of para recorrer el Set
console.log("\nRECORRIENDO SET CON for...of");

for (const numero of numeros) {
  console.log(`Número: ${numero}`);
}

// 3. forEach() para recorrer el Map
console.log("\n RECORRIENDO MAP CON forEach() ");

categoriasProductos.forEach((valor, clave) => {
  console.log(`Categoría: ${clave} → Producto: ${valor}`);
});

// USO DE MÉTODOS DE OBJETOS

console.log("\n Object.keys() ");

productos.forEach((producto) => {
  console.log(Object.keys(producto));
});

console.log("\nObject.values() ");

productos.forEach((producto) => {
  console.log(Object.values(producto));
});

console.log("\nObject.entries()");

productos.forEach((producto) => {
  console.log(Object.entries(producto));
});

// PRUEBAS FINALES

console.log("\nLISTA COMPLETA DE PRODUCTOS");
console.log(productos);

console.log("\nLISTA DE PRODUCTOS ÚNICOS (SET");
console.log([...numeros]);

console.log("\nCATEGORÍAS Y NOMBRES DE PRODUCTOS");

categoriasProductos.forEach((nombre, categoria) => {
  console.log(`${categoria}: ${nombre}`);
});