const sumar = (a: number, b: number): number => {
  const resultada = a + b;
  return resultada;
};

console.log("El resultado de la suma es:", sumar(2, 3));

type Producto = {
  id: number;
  nombre: string;
  precio: number;
};

const aplicarDescuento = (producto: Producto, descuento: number): Producto => {
  const precioConDescuento =
    producto.precio - (producto.precio * descuento) / 100;
  return { ...producto, precio: precioConDescuento };
};

const productoDescuento: Producto = {
  id: 1,
  nombre: "Laptop",
  precio: 1000,
};

console.log("Producto con descuento:", aplicarDescuento(productoDescuento, 10));
