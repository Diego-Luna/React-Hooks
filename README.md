# React-Hooks

## ¿Qué son los React Hooks y cómo cambian el desarrollo con React?

Es una característica que salió en la versión 16.8 en febrero de 2019.
Los Hooks vienen a cambiar la forma de desarrollo en React.

Vienen a resolver problemas ligados a React, como la complejidad de los componentes, no se podía compartir la lógica de estado entre componentes, Component Hell, etc.

Los Hooks presentan una alternativa al desarrollo con clases, ya que estos vienen a trabajar con funciones.

¿Qué es un Hook?
Un Hook es una función especial que nos permitirá conectarnos a características de React, para trabajar con métodos especiales, los cuales nos permitirán manejar el estado de mejor forma sin depender de clases.

Crear proyecto:

> npx create-react-app react-hooks
> Ejecutar proyecto:
> npm run start

## React 17

Nota: desde la version 17 de React es opcional importar React en todos los componentes solo se importa una sola vez en todo el proyecto, este caso solo se importa en el archivo index.js, y solo se necesita importar lo que vamos a usar de la librería
Antes en cualquier componente

```js
import React, {useState} from ‘react’;
```

Versión 17 de React

```js
import {useState} from 'react’
```

## useState

Te permite poder usar variables de estado dentro de componentes funcionales.

El Hook useState siempre nos retorna un array de dos posiciones. En la primera posición [0] vamos a tener el estado y él la segunda posición [1] vamos a tener la funciona para manipular el estado.

const [state, setState] = useState(0);

En este caso hacemos uso de la desestructuración del array una característica de ES6.

state ⇒ 0

setState ⇒ Función que actualiza el estado

Nuestro estado puede ser de los siguente tipos:

-String

-Boolean

-Number

-Float

-Null

-Undefined

-Object

-Array

## useReducer: como useState, pero más escalable

- Como useState, pero más escalable
- Implementa una forma más amigables y llena de caracteristicas para trabajar con el estado
- useReducer a menudo es preferible a useState cuando:
  - se tiene una lógica compleja que involucra múltiples subvalores
  - el próximo estado depende del anterior.

Mas informacion:

- https://platzi.com/blog/usestate-vs-usereducer/
- https://amanhimself.hashnode.dev/how-to-manage-state-in-react-apps-with-usereducer-and-usecontext-hooks

## ¿Qué es memoization? Técnicas de optimización en programación funciona

La memoria de JavaScript no es infinita, existe un máximo de funciones y cálculos que podemos hacer. Incluso si no la usamos toda, gastarla excesivamente causará que nuestras aplicaciones corran lento, con mucho lag o sencillamente briden una muy mala experiencia a los usuarios.

Nuestro código puede parecer pequeño cuando utilizamos técnicas de programación funcional como currying y recursividad. Pero no te dejes engañar. Así estemos llamando a la misma función una y otra vez recursivamente, cada cálculo o llamado a esta función genera nuevos “bloques” en la pila de ejecuciones que debe hacer JavaScript. Esto afecta a la memoria de JavaScript y puede estropear nuestra aplicación.

La buena noticia es que muy seguramente no tienes de qué preocuparte. Este “problema” no será realmente un problema a menos que construyas aplicaciones muy, muy grandes (por ejemplo, videojuegos en el navegador) donde la optimización de memoria es vital.

### Aplica memoization para evitar cálculos innecesarios

La memoización (sí, sin r) es una técnica muy útil para evitar cálculos innecesarios en nuestro código. Guardamos el resultado de nuestros cálculos cada vez que los hacemos para no tener que repetirlos en el futuro. En otras palabras, estamos ahorrando grandes cantidades de tiempo a cambio de “mucho” espacio de almacenamiento.

#### Ejemplo práctico: calcular el factorial

El factorial de un número es su multiplicación por todos los números anteriores a este hasta llegar al 1. La implementación por defecto de una función factorial utilizando recursividad en JavaScript se vería así:

```js
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
```

Al calcular el factorial de 5 estamos multiplicando 5 _ 4 _ 3 _ 2 _ 1. Y si calculamos el factorial de 10 estamos multiplicando 10 _ 9 _ 8 _ 7 _ 6 _ 5 _ 4 _ 3 _ 2 \* 1. Si te fijas bien, ambos cálculos terminan igual, con las multiplicaciones del 5 hasta el 1. Esto significa que al ejecutar el factorial de 5 y luego el factorial de 10, estamos repitiendo la última parte del cálculo.

Vamos a crear una variable de tipo array que nos permita ir guardando el resultado de todos nuestros cálculos. Luego actualizaremos nuestra función para que antes de hacer los cálculos inspeccionamos nuestra variable para encontrar si el factorial de nuestro número ya fue realizado antes y no debemos volver a hacer el cálculo.

```js
const memo = [];

function memoFactorial(n) {
  if (n === 1) {
    return 1;
  } else if (!memo[n]) {
    memo[n] = n * memoFactorial(n - 1);
  }
  return memo[n];
}
```

#### Segundo ejemplo práctico: la secuencia Fibonacci

La función Fibonacci es una sucesión de números que llega hasta el infinito. Cada nuevo número en la sucesión es la suma del cálculo Fibonacci de los dos números anteriores en la sucesión (que empieza con cero y uno).

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377...

El código en JavaScript para encontrar el número que ocupa X posición en la secuencia Fibonacci utilizando recursividad sería el siguiente:

```js
function fibonacci(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
```

El cálculo es correcto, el cuarto número en la sucesión Fibonacci es 5. El problema es que estamos repitiendo muchas veces el cálculo de varios números.

Repetimos 5 veces el cálculo de fibonacci(0), 3 veces fibonacci(1) y 2 veces fibonacci(2). Para calcular el fibonacci de 4 puede no ser tan grave, pero mientras más grande sean los números, más cálculos debemos realizar y, por lo tanto, más cálculos estaremos repitiendo.

La buena noticia es que utilizando memoization podemos evitar hacer los mismos cálculos una y otra vez. Así como en el ejemplo anterior, vamos a guardar el resultado de cada cálculo Fibonacci en una variable memo, así cuando debamos volver a calcular el Fibonacci de un número, podemos simplemente utilizar el resultado que previamente calculamos.

```js
const memo = [];

function memoFibonacci(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else if (!memo[n]) {
    memo[n] = memoFibonacci(n - 1) + memoFibonacci(n - 2);
  }
  return memo[n];
}
```
Ahora el cálculo de memoFibonacci(4) es mucho más corto.

