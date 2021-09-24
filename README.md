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

## useMemo: evita cálculos innecesarios en componentes

useMemo nos permitirá usar la memoización de forma simple, como antes anterior, esto nos permite almacenar los resultados de una función para que, en caso de enviar los mismo argumentos que antes, ésta no haga los cálculos otra vez sino que devuelva el resultado que registró antes.

Guiándome un poco de las Documentación de React Hooks, hice un boceto de lo que sería el uso básico de useMemo:

```js
const memoValue = useMemo(() => myFuncion(a, b), [valueToWach]);
```

Donde myFunction será la función que no queremos que haga los cálculos siempre, y el valueToWatch es la variable que, al cambiar de valor, hará que nuestro memo se ejecute (igual que el segundo argumento del useEffect)

## useRef: manejo profesional de inputs y formularios

**Manejo profesional de inputs y formularios**

Creación de la referencia

```js
const refContainer = useRef(initialValue);
```

Uso de la referencia

```js
<input type="text" value={search} ref={searchInput} onChange={handleSearch} />
```

conceptos claves:
useRef.- devuelve un objeto ref mutable cuya propiedad .current se inicializa con el argumento pasado (initialValue). El objeto devuelto se mantendrá persistente durante la vida completa del componente

Referencias: https://es.reactjs.org/docs/hooks-reference.html#useref

RESUMEN: use ref nos sirve para obtener un elemento del DOM construido por React de tal forma que podamos acceder a sus atributos de una forma imperativa

## useCallback: evita cálculos innecesarios en funciones

- Cada vez que hacemos un render se vuelve a construir las referencias a las funciones
- La solución para este problema es usar useCallback el cual solo genera una referencia para una función
- Es decir que memoriza la funcion
  a través de la lista de dependencias que mandamos cuando lo generamos, estamos indicando cuando debe volver a memorizar esa función, es decir cuando cambien esos valores
- Esto es útil cuando se transfieren callbacks a componentes hijos optimizados que dependen de la igualdad de referencia para evitar renders innecesarios

```js
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

Ideas/conceptos claves

useCallback.- Memoriza una función

recursos

Referencia: https://es.reactjs.org/docs/hooks-reference.html#usecallback

## ¿Qué significa optimización en React?

No existe una sola forma de optimizar componentes. Hay muchísimas formas de crear componentes y aún así podemos mostrar el “mismo” resultado en pantalla. Pero la forma en que lo hacemos puede afectar notoriamente el rendimiento del proyecto para nuestros usuarios.

Optimizar no es una sola técnica o fórmula secreta. Optimizar significa analizar los componentes de nuestro proyecto para mejorar el tiempo que tardamos en ejecutar cierto proceso o identificar procesos que estamos ejecutando en momentos innecesarios y le cuestan trabajo a la aplicación.

Vamos a utilizar 2 herramientas oficiales de React para optimizar nuestros componentes. Pero ¿para qué tipo de optimización podemos utilizarlas? Vamos a evitar que nuestros componentes se rendericen innecesariamente.

### React.memo vs. React.PureComponent

Vamos a evitar renders innecesarios causados por un mal manejo de las props.

- **¿Cómo funciona PureComponent?**

PureComponent es una clase de React muy similar a React.Component, pero por defecto el método shouldComponentUpdate compara las props nuevas y viejas, si no han cambiado, evita volver a llamar el método render del componente. Esta comparación se llama Shallow Comparison.

Esta lectura te ayudará si quieres profundizar en cómo funcionan los objetos en JavaScript y por qué es necesario implementar shallow comparison en vez de una comparación “normal”: [Aprende a Copiar Objetos en JavaScript sin morir en el intento](https://platzi.com/blog/como-copiar-objetos-en-javascript-sin-morir-en-el-intento/).

- **¿Cuándo debo usar React.PureComponent?**
  En este ejemplo práctico crearemos 3 componentes, un papá y dos hijos. El componente padre tiene un estado con dos elementos, count y canEdit. El padre tiene dos funciones que actualizan cada elemento del estado. Y cada elemento del estado se envía a un componente hijo diferente.

Sin importar en qué botón demos clic, todos los componentes se vuelven a renderizar.

Este error puede ser muy grave. La prop canEdit no tiene ninguna conexión con el componente Counter ni la prop count con el componente Permissions, pero, aún así, si cualquiera de las dos cambia, los 3 componentes se vuelven a renderizar.

Afortunadamente podemos arreglarlo/optimizarlo cambiando React.Component por React.PureComponent.

```js
class App extends React.PureComponent {
  /* … */
}
class Counter extends React.PureComponent {
  /* … */
}
class Permissions extends React.PureComponent {
  /* … */
}
```

- **¿Cómo funciona y cuándo debo usar React.memo?**
  Si useEffect es el “reemplazo” del ciclo de vida en componentes creados como funciones con React Hooks, React.memo es el “reemplazo” de PureComponent.

Convirtamos el ejemplo anterior a funciones con React Hooks:

```js
const App = function () {
  console.log("Render App");

  const [count, setCount] = React.useState(1);
  const [canEdit, setCanEdit] = React.useState(true);

  const countPlusPlus = () => {
    console.log("Click al botón de counter");
    setCount(count + 1);
  };

  const toggleCanEdit = () => {
    console.log("Click al botón de toggleCanEdit");
    setCanEdit(!canEdit);
  };

  return (
    <>
      <button onClick={countPlusPlus}>Counter +1</button>
      <Counter count={count} />

      <button onClick={toggleCanEdit}>Toggle Can Edit</button>
      <Permissions canEdit={canEdit} />
    </>
  );
};

const Permissions = function ({ canEdit }) {
  console.log("Render Permissions");

  return (
    <form>
      <p>Can Edit es {canEdit ? "verdadero" : "falso"}</p>
    </form>
  );
};

const Counter = function ({ count }) {
  console.log("Render Counter");

  return (
    <form>
      <p>Counter: {count}</p>
    </form>
  );
};
```

El resultado va a ser exactamente igual que al usar React.Component.

Ahora usemos React.memo para que nuestro componente no se renderice si las props que recibe siguen igual que en el render anterior.

```js
const App = React.memo(function () {
  /* … */
});

const Permissions = React.memo(function ({ canEdit }) {
  /* … */
});

const Counter = React.memo(function ({ count }) {
  /* … */
});
```

\*\* **¿Cómo crear una comparación personalizada con React.memo o shouldComponentUpdate?**
En algunos casos puede que no necesitemos shallow comparison, sino una comparación o validación personalizada. En estos casos lo único que debemos hacer es reescribir el método shouldComponentUpdate o enviar un segundo argumento a React.memo (casi siempre incluimos los keywords are equal al nombre de esta función).

Esta nueva comparación la necesitaremos, por ejemplo, cuando nuestro componente recibe varias props, pero solo necesita su valor inicial, es decir, sin importar si cambian, a nuestro componente le da igual y solo utilizará la primera versión de las props.

```js
// Con clases
class Permissions extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    /* … */
  }
}

// Con hooks
function memoStopIfPropsAreEqualOrNot(oldProps, newProps) {
  return true;
}

const Permissions = React.memo(function ({ canEdit }) {
  /* … */
}, memoStopIfPropsAreEqualOrNot);
```

En este caso evitamos que nuestro componente se actualice sin importar si cambian nuestras props. Pero ¿qué tal si sí debemos volver a renderizar cuando cambia alguna de nuestras props?

```js
// Con clases
class Permissions extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.input.value !== nextProps.input.value) {
      return true;
    } else {
      return false;
    }
  }
}

// Con hooks
function memoIsInputEqual(oldProps, newProps) {
  if (oldProps.input.value !== newProps.input.value) {
    return false;
  } else {
    return true;
  }
}

const Permissions = React.memo(function ({ canEdit }) {
  /* … */
}, memoIsInputEqual);
```

Recuerda que la función shouldComponentUpdate debe devolver true si queremos que nuestro componente se vuelva a renderizar. En cambio, la función de evaluación de React.memo debe devolver false si nuestras props son diferentes y, por ende, queremos permitir un nuevo render.

## Third Party Custom Hooks de Redux y React Router

Los React Hooks cambiaron tanto la forma de hacer nuestro código para crear aplicaciones que otras herramientas también han creado sus propios custom hooks, de forma que podemos usarlos para que nuestro código sea más legible y fácil de mantener.

### React Redux

Dos custom hooks que son muy útiles al momento de usar esta biblioteca: useSelector y useDispatcher. Estos los encontrarás a partir de la versión 7.1.0 de la biblioteca y a continuación te explicaré para qué sirven:

- useSelector: nos permite elegir de qué contenido en nuestro estado queremos leer información para usarla en nuestro componente.

```js
// Primero debemos importar el hook desde react-redux
import { useSelector } from "react-redux";

// El hook recibe una función y aquí indicamos qué parte del estado queremos
const myProperty = useSelector((state) => state.myProperty);
```

- useDispatcher: nos permite ejecutar las acciones hacia nuestro estado.

```js
// Importamos el hook
import { useDispatcher } from "react-redux";

// Creamos una variable donde vivirá nuestro dispatcher
const dispatcher = useDispatcher();

// Ahora solo debemos pasarle la información de la acción que se ejecutará en nuestro reducer
dispatcher({ type: actionType, payload });
```

Si quieres aprender a crear un sencillo contador de clics, pero usando esta configuración de hooks y toda la configuración de Redux en React, te recomiendo seguir este tutorial: [Redux es fácil si usas React Hooks](https://platzi.com/tutoriales/2118-react-hooks/10726-redux-es-facil-si-usas-los-hooks-2/).

### React Router

React Router también contiene diferentes custom hooks para acceder a varias funcionalidades e información de la navegación del usuario en nuestra aplicación.

- useHistory: nos permite acceder a los métodos de navegación para movernos a través de ella de la forma que lo veamos más conveniente. Por ejemplo:

```js
import { useHistory } from "react-router-dom";
let history = useHistory();
history.push("/home");
```

- useLocation: nos permite acceder a la información de la URL actual en la que se encuentran nuestros usuarios.

```js
import { useLocation } from "react-router-dom";
let location = useLocation();
console.log(location.pathname);
```

- useParams: nos permite acceder a un objeto con la información de los parámetros que tendremos en la ruta que estamos navegando, por ejemplo, el slug de un blogpost.

```js
import { useParams } from "react-router-dom";
let { slug } = useParams();
console.log(slug);
```

- useRouteMatch: funciona al igual que los componentes <Route>, pero este hook también nos permitirá saber si existe algún match adicional que podremos usar para mostrar o no otra información en la misma vista.

```js
import { useRouteMatch } from "react-router-dom";
let match = useRouteMatch("/blog/:slug");

return (
  <div>
    <h1>Hello World</h1>
    {match && <p>Route matches</p>}
  </div>
);
```

## Instalación de Webpack y Babel: presets, plugins y loaders

Comando para instalar webpack:

```
npm install webpack webpack-cli webpack-dev-server --save-dev
```

Comando para instalar el plugin de html:

```
npm install html-webpack-plugin html-loader --save-dev
```

Comando para instalar babel:

````
npm install babel-loader  @babel/preset-env @babel/preset-react @babel/core --save-dev```
````

## snippets, de Webpack 5
* (control o comand) + shift + p
* Escriben snippets en el recuadro que les aparece
* Seleccionan preferences: configure user snippets
* Buscan javascript
* Les aparece un json y copian lo siguiente

```js
{
	// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }

	"webpack config": {
		"prefix": "wpc",
		"body": [
		  "const path = require(\"path\");",
		  "const HtmlWebpackPlugin = require(\"html-webpack-plugin\");",
		  "",
		  "module.exports = {",
		  "  entry: \"./src/index.js\",",
		  "  output: {",
		  "    path: path.resolve(__dirname, \"dist\"),",
		  "    filename: \"bundle.js\",",
		  "  },",
		  "  resolve: {",
		  "    extensions: [\".js\", \".jsx\"],",
		  "  },",
		  "  module: {",
		  "    rules: [",
		  "      {",
		  "        test: /\\.(js|jsx)$/,",
		  "        exclude: /node_modules/,",
		  "        use: {",
		  "          loader: \"babel-loader\",",
		  "        },",
		  "      },",
		  "      {",
		  "        test: /\\.html$/,",
		  "        use: [",
		  "          {",
		  "            loader: \"html-loader\",",
		  "          },",
		  "        ],",
		  "      },",
		  "    ],",
		  "  },",
		  "  plugins: [",
		  "    new HtmlWebpackPlugin({",
		  "      template: \"./public/index.html\",",
		  "      filename: \"./index.html\",",
		  "    }),",
		  "  ],",
		  "  devServer: {",
		  "    static: path.join(__dirname, \"dist\"),",
		  "    compress: true,",
		  "    port: 3000,",
      "    open: true,",
		  "  },",
		  "};",
		],
		"description": "webpack configuration"
	  }
}
```

Listo ahora cuando quieran crear el archivo de configuracion de webpack solo escriben wpc en el editor de codigo y les sale todo.

```
wpc //les saldra para completar
```

## actualizacion de Snippet para css

```js
{
	// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }

	"webpack config": {
		"prefix": "wpc",
		"body": [
		  "const path = require(\"path\");",
		  "const HtmlWebpackPlugin = require(\"html-webpack-plugin\");",
		  "const MiniCssExtractPlugin = require('mini-css-extract-plugin');",
		  "",
		  "module.exports = {",
		  "    entry: \"./src/index.js\",",
		  "    output: {",
		  "      path: path.resolve(__dirname, \"dist\"),",
		  "      filename: \"bundle.js\",",
		  "    },",
		  "    resolve: {",
		  "      extensions: [\".js\", \".jsx\"],",
		  "    },",
		  "    module: {",
		  "      rules: [",
		  "        {",
		  "          test: /\\.(js|jsx)$/,",
		  "          exclude: /node_modules/,",
		  "          use: {",
		  "            loader: \"babel-loader\",",
		  "          },",
		  "        },",
		  "        {",
		  "          test: /\\.html$/,",
		  "          use: [",
		  "            {",
		  "              loader: \"html-loader\",",
		  "            },",
		  "          ],",
		  "        },",
		  "        {",
		  "            test: /\\.css$/,",
		  "            use:[",
		  "                {",
		  "                    loader: MiniCssExtractPlugin.loader,",
		  "                },",
		  "                'css-loader'",
		  "            ]",
		  "        }",
		  "      ],",
		  "    },",
		  "    plugins: [",
		  "      new HtmlWebpackPlugin({",
		  "        template: \"./public/index.html\",",
		  "        filename: \"./index.html\",",
		  "      }),",
		  "",
		  "      new MiniCssExtractPlugin({",
		  "          filename: 'assests/[name].css',",
		  "      })",
		  "    ],",
		  "    devServer: {",
		  "      static: path.join(__dirname, \"dist\"),",
		  "      compress: true,",
		  "      port: 3000,",
			"      open: true,",
		  "    },",
		  "  };"
		],
		"description": "webpack configuration"
	  }

}
```