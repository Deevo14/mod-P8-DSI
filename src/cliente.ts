import { Revista } from "./clases/revista";
import { Suscriptor } from "./clases/suscriptor";

const revista = new Revista("El País", [1, 2, 3, 4, 5], 2020, 1000);
const suscriptor = new Suscriptor("Pepe", 1);
const suscriptor2 = new Suscriptor("Juan", 2);

console.log("suscribiendo a Pepe");
revista.subscribe(suscriptor);

console.log("suscribiendo a Juan");
revista.subscribe(suscriptor2);

try {
  revista.subscribe(suscriptor);
} catch (error) {
  console.log('Error al subscribir, el usuario ya estaba suscrito');
}

console.log("añadiendo edición");
revista.addEdition(6);
