## Buscador de GIFs

### Para comenzar:

Instalar el boilerplate: npm install -g create-react-app.
Crear un proyecto nuevo: npx create-react-app gif-search.
Correr el proyecto: npm start.
Ir al navegador y ver que el proyecto corre: http://localhost:3000/.
¡ Comencemos!

## Los componentes son:

### App.js

Este componente es nuestro contenedor y será nuestro punto de partida. 

### SearchGif.js

Este componente será la barra de búsqueda que importamos en App.js

### GroupList.js

Asigna a través de la matriz de gifs que recibiremos de la API de Giphy 

### GifElement.js

Y finalmente un GifElement para procesar los gifs individuales.

## Consumiendo la API de Giphy

La API base es http://api.giphy.com/v1/gifs/search?q=. A continuación le debemos escribir el nombre del gif que queremos, para lo que usaremos: ${term} con lo que interpolamos el contenido del buscador y adicionalmente nuestra API KEY con &api_key= seguida del número asignado al crear un proyecto en https://developers.giphy.com/ .
Y, para hacer los llamados usaremos una librería llamada axios. Para hacer uso de ella utilizaremos el comando: npm install axios y la importamos en App.js.

