# Countries Explorer - Práctica de consumo de API

## Descripción

Aplicación desarrollada con React y Vite para
consumir información de países desde REST Countries.

## API utilizada
REST Countries
https://restcountries.com/docs/countries

Endpoint: https://api.restcountries.com/countries/v5

Método HTTP: GET

## Funcionalidades

- Consumo de API mediante fetch.
- Visualización del JSON en consola.
- Renderizado de países con React.
- Uso de useEffect y useState.
- Manejo de estados de carga y error.

## Instalación

1. Ejecutar npm install
2. Configurar VITE_COUNTRIES_API_KEY en .env.local
3. Autorizar localhost en la configuración de la API
4. Ejecutar npm run dev


## Avance - Segunda práctica

Se implementó la visualización de países en React
a partir de los datos obtenidos de REST Countries

### Funcionalidades implementadas

- Petición HTTP GET mediante fetch y useEffect
- Manejo de datos con useState
- Estado de carga durante la consulta
- Manejo de errores de la API
- Renderizado dinámico mediante map()
- Uso del código ISO como key única
- Visualización de bandera, nombre, región y población

### Estados de la aplicación

1. Cargando: mientras se realiza la petición
2. Datos: cuando la API responde correctamente
3. Error: cuando ocurre un problema con la petición
