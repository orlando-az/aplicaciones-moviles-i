# 🧠 Ejercicio: Tipos de Datos en TypeScript

Crear un archivo **TypeScript** para practicar el uso de los **tipos de datos básicos**.

## 📝 Instrucciones

1. Crea un archivo llamado **`tipos_basicos.ts`**.
2. Declara variables utilizando los tipos **`string`**, **`number`** y **`boolean`**.
3. Muestra sus valores en consola usando **`console.log()`**.
4. Crea **arreglos** de números y de cadenas, e imprime su contenido.
5. Declara una **tupla** que contenga un nombre, una edad y un valor booleano.
6. Define un **enum** con tres colores (por ejemplo: `Rojo`, `Verde` y `Azul`) y muestra en consola uno de ellos como color favorito.

# 🧩 Interfaces y Types en TypeScript

Practicar el uso de **interfaces** y **types** para definir estructuras de datos en TypeScript.  
Aprenderás cómo se utilizan, cómo se extienden y en qué se diferencian.

---

## 📝 Instrucciones

1. Crea un archivo llamado **`interfaces_types.ts`**.
2. Declara una **interface** llamada `Product` con las propiedades `id`, `name`, `price` e `inStock`.
3. Crea un objeto `p` de tipo `Product` y muéstralo en consola.
4. Declara un **type** llamado `User` con las propiedades `username`, `email` y `password`.
5. Crea un objeto `u` de tipo `User` y muéstralo en consola.
6. Declara una **interface** llamada `Person` y otra `Employee` que la extienda, agregando propiedades adicionales.
7. Declara un **type** llamado `Customer` que combine (`&`) las propiedades de `Person` con nuevas propiedades (`customerId` y `loyaltyPoints`).
8. Crea objetos `emp` y `cust` y muestra sus valores en consola.

# 💻 Ejercicio – Funciones en TypeScript

Implementar **funciones** para realizar operaciones simples como una suma y la aplicación de un descuento a un producto.

---

## 🧮 Suma de dos números

### 🧠 Descripción

Se crea una función `add` que recibe dos números y retorna su suma.
Es un ejemplo básico del uso de **tipos explícitos** en funciones.

# 🛍️ Aplicar descuento a un producto

## 🧠 Descripción

Se define una **interfaz `Product`** para representar un producto

Luego implementar la función **`aplicarDescuento`**, que calcula un nuevo precio aplicando un **porcentaje de descuento** al producto y devuelve un **nuevo objeto actualizado** con el precio modificado.

# 🧮 Ejercicios Básicos en TypeScript

Este apartado contiene ejercicios introductorios en **TypeScript** para practicar el uso de **tipos, funciones y estructuras de datos** como arreglos y objetos.

---

# 🧮 Ejercicio 1

## 🧠 Descripción

Implementa una función que calcule el **total a pagar** de una venta.  
La función debe **multiplicar el precio por la cantidad** de cada producto y luego **sumar todos los subtotales**.

---

# 👨‍💼 Ejercicio 2 – Filtrar empleados activos

## 🧠 Descripción

Crea un arreglo de empleados que contenga su **nombre** y un valor booleano que indique si están **activos** o no.  
Luego, filtra para obtener y mostrar solo los empleados que estén activos.

---

```bash
npx ts-node ejercicio2.ts
```
