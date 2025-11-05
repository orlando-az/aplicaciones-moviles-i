//interfaces
interface Product {
  id: number;
  name: string;
  price: number;
  isStock: boolean;
}

const p: Product = {
  id: 1,
  name: "Laptop",
  price: 6000,
  isStock: true,
};

console.log("Mi producto:", p);

// Tipos

type User = {
  id: number;
  username: string;
  isAdmin: boolean;
};
const u: User = {
  id: 1,
  username: "Isaac",
  isAdmin: true,
};

console.log("Mi usuario es:", u);

// Diferencia entre interface y type

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  jobTitle: string;
  salary: number;
}

const emp: Employee = {
  name: "Maria",
  age: 28,
  jobTitle: "Developer",
  salary: 8000,
};
console.log("Empleado:", emp);
