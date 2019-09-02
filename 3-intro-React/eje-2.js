'use strict';

// EJERCICIO 2
// Partiendo del ejercicio anterior, en este ejercicio aprenderemos mejor cómo funciona JSX. 
// Para ello vamos a asignar nombres a las variables, un tema que será importante cuando creemos nuestros componentes más adelante.
// Partiendo del proyecto anterior, solo modificaremos el método render() dentro del archivo App.js. 
// El objetivo será que el return de render() devuelva una sola variable. Para lo que extraeremos a 
// variables cada una de las "etiquetas" del contenido del return original. 
// Por ejemplo, una variable para la cabecera, y otra para el párrafo. Haremos que los nombres de nuestras
// variables sean descriptivos y, cuando sea posible, cortos.

// render() {
//   /* aquí irán el resto de variables que extraeremos */
//   const appRoot = (
//     <div className="card">
//     ...
//     </div>
//   );

//   return appRoot;
// }