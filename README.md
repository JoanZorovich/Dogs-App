# Dogs APP

En esta aplicación podrás ver distintas razas de perros junto con los detalles de las mismas utilizando la api externa [the dog api](https://thedogapi.com/) y a partir de ella poder, entre otras cosas:

  - Buscar razas de perros
  - Filtrarlos / Ordenarlos
  - Agregar nuevas razas
 
![Landing](https://user-images.githubusercontent.com/74875335/123455609-873b5780-d5a7-11eb-8a8e-9024a220d714.PNG)

## - Home

![home_dogs](https://user-images.githubusercontent.com/74875335/123455724-a89c4380-d5a7-11eb-9777-94c502e60fc2.PNG)

## - Detalle de raza

![detalle_perrito](https://user-images.githubusercontent.com/74875335/123455803-c23d8b00-d5a7-11eb-8930-6e8ac4534a38.PNG)

## - Crear una raza

![create_dog](https://user-images.githubusercontent.com/74875335/123455879-d41f2e00-d5a7-11eb-940e-a3882ddc1f20.PNG)


## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

__IMPORTANTE__: Para poder utilizar esta API es necesario crear una cuenta para obtener una API Key que deberá ser incluida en el archivo .env

El archivo `.env` (carpeta api) debe tener la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
API_KEY=tu API key
DB_NAME=dogs
PORT=3001
```
Adicionalmente será necesario que crees desde psql una base de datos llamada dogs

### Instalación 🔧

1. Clona el repo
   ```sh
   git clone https://github.com/JoanZorovich/Games.git
   ```
2. Instala los paquetes
   ```sh
   npm install
   ```
3. Inicia tanto el back (carpeta api), como el front (carpeta client)
   ```sh
   npm start
   ```
  
## Construido con 🛠️

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres


## Licencia 📄

Este proyecto fue creado con fines educativos, no tiene fines de lucro - sientete libre de usarlo




---
⌨️ con ❤️ por [Joan Zorovich](https://github.com/JoanZorovich) 😊

