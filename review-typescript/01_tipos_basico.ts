//Tipos basicos en TypeScript
let name: string = "Isaac";
console.log("Mi nombre es:", name);

let age: number = 34;
console.log("Mi edad es:", age);

let isDeveloper: boolean = true;
console.log("Seguro eres developer", isDeveloper);

//Arreglos
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Mi arreglo de numeros:", numbers);

let names: string[] = ["Isaac", "Maria", "Pedro"];
console.log("Los nombres son:", names);

let a: number = 10;
let b: number = 20;

const suma = a + b;
console.log("El resultado de la suma es:", suma);

//Tuplas

let person: [string, number, boolean] = ["Isaac", 34, true];
console.log("La persona es:", person);

//Enumeraciones

enum Color {
  Rojo,
  Verde,
  Azul,
}
let favoriteColor: Color = Color.Verde;
console.log(Color[favoriteColor]);
