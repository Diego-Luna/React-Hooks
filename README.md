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

* Como useState, pero más escalable
* Implementa una forma más amigables y llena de caracteristicas para trabajar con el estado
* useReducer a menudo es preferible a useState cuando:
  * se tiene una lógica compleja que involucra múltiples subvalores
  * el próximo estado depende del anterior.

Mas informacion:
* https://platzi.com/blog/usestate-vs-usereducer/
* https://amanhimself.hashnode.dev/how-to-manage-state-in-react-apps-with-usereducer-and-usecontext-hooks