interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

const totalVenta = (productos: Product[]): number => {
  //   let total = 0;
  //   productos.forEach((p) => {
  //     total += p.price * p.stock;
  //   });
  //   return total;
  return productos.reduce((total, p) => total + p.price * p.stock, 0);
};

const productosVenta: Product[] = [
  { id: 1, name: "Monitor", price: 100, stock: 2 },
  { id: 2, name: "Mouse", price: 50, stock: 1 },
  { id: 3, name: "Keyboard", price: 200, stock: 2 },
];

console.log("El total de la venta:", totalVenta(productosVenta));

type Empleado = {
  id: number;
  nombre: string;
  esActivo: boolean;
};

const listaEmpleado: Empleado[] = [
  { id: 1, nombre: "Maria", esActivo: true },
  { id: 2, nombre: "`Juan", esActivo: false },
  { id: 3, nombre: "Pedro", esActivo: true },
];

const empleadosActivos = (empleados: Empleado[]): Empleado[] => {
  return empleados.filter((e) => e.esActivo === true);
};

console.log(empleadosActivos(listaEmpleado));
