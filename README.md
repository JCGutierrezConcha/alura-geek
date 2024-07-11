# Alura Geek

Alura Geek es una aplicación web para gestionar productos de una tienda en línea. 
Permite agregar, mostrar y eliminar productos de una lista. 
Este proyecto utiliza JSON Server para simular una API REST.

## Requisitos

Para ejecutar este proyecto, necesitas tener instalado:

- [Node.js](https://nodejs.org/)
- Un navegador web

## Instalación

1. Clonar el repositorio.

```
git clone https://github.com/JCGutierrezConcha/alura-geek.git
cd alura-geek
```

2. Instalar JSON Server.
```
npm install -g json-server
```

3. Iniciar JSON Server.
```
json-server --watch db.json --port 3000
```

4. Abrir el archivo index.html

Abra el archivo index.html en su navegador web. 

5. Caso de ejemplo para ingresar un nuevo producto.

Ingrese los siguientes datos en el formulario para Agregar Producto

 - Nombre:Groot
 - Precio:15000
 - Imagen: ./imagenes/groot-funko.JPG

Apretar el botón "Enviar"

6. Eliminar un producto.

Para elimnar un producto, presionar el icono del basurero en el respectivo producto.



