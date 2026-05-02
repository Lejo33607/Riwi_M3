const nombre = prompt("Ingresa tu nombre: "); // Solicita al usuario que ingrese su nombre
let edad = parseInt(prompt("Ingresa tu edad: ")); // Solicita al usuario que ingrese su edad y la convierte a un número entero

while (isNaN(edad)) {
  edad = parseInt(prompt("Ingresa una edad valida: "));
  console.error("Error: Edad no válida");
} // Verifica si la edad ingresada es un número válido, si no lo es, solicita nuevamente hasta que se ingrese una edad válida
if (edad >= 18) {
  console.log(
    "Hola " +
      nombre +
      ", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!",
  );
} // Si la edad es mayor o igual a 18, muestra un mensaje de bienvenida para adultos
else {
  console.log(
    "Hola, " + nombre + "! Sigue aprendiendo y disfrutando del codigo",
  );
} // Si la edad es menor a 18, muestra un mensaje de bienvenida para menores de edad
