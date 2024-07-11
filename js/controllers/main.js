document.addEventListener("DOMContentLoaded", function () {
    cargarProductos();

    const form = document.querySelector('[data-form]');
    const limpiarButton = document.querySelector('.boton-limpiar');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nombre = document.querySelector('[data-nombre]').value;
        const precio = document.querySelector('[data-precio]').value;
        const imagen = document.querySelector('[data-imagen]').value;

        const producto = {
            id: Date.now().toString(),
            nombre,
            precio,
            imagen
        };

        try {
            const response = await fetch('http://localhost:3000/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });

            if (response.ok) {
                cargarProductos();
            } else {
                console.error('Error al agregar el producto:', response.statusText);
            }
        } catch (error) {
            console.error('Error de red al agregar el producto:', error);
        }
    });
    limpiarButton.addEventListener('click', () => {
        form.reset();
    });
});

async function cargarProductos() {
    try {
        const response = await fetch('http://localhost:3000/productos');
        const data = await response.json();

        const productosContainer = document.getElementById('producto-container');
        productosContainer.innerHTML = '';

        data.forEach(producto => {
            const productoItem = document.createElement('div');
            productoItem.className = 'producto-item';

            const productoImagen = document.createElement('img');
            productoImagen.className = 'producto-imagen';
            productoImagen.src = producto.imagen;
            productoImagen.alt = producto.nombre;

            const productoDescripcion = document.createElement('p');
            productoDescripcion.className = 'producto-nombre';
            productoDescripcion.textContent = producto.nombre;

            const productoPrecio = document.createElement('p');
            productoPrecio.className = 'producto-precio';
            productoPrecio.textContent = `$ ${producto.precio}`;

            const productoButton = document.createElement('button');
            productoButton.className = 'icono-borrar';
            productoButton.setAttribute('data-id', producto.id);
            const iconoBasurero = document.createElement('div');
            iconoBasurero.className = 'icono-basurero';
            const iconoImg = document.createElement('img');
            iconoImg.src = 'imagenes/icon _trash.png';
            iconoImg.alt = 'Eliminar';
            iconoBasurero.appendChild(iconoImg);
            productoButton.appendChild(iconoBasurero);

            productoItem.appendChild(productoImagen);
            productoItem.appendChild(productoDescripcion);
            productoItem.appendChild(productoPrecio);
            productoItem.appendChild(productoButton);

            productosContainer.appendChild(productoItem);

            productoButton.addEventListener('click', () => eliminarProducto(producto.id));
        });
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
}

async function eliminarProducto(id) {
    try {
        const response = await fetch(`http://localhost:3000/productos/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Producto eliminado:', id);
            cargarProductos();
        } else {
            console.error('Error al eliminar el producto:', response.statusText);
        }
    } catch (error) {
        console.error('Error de red al eliminar el producto:', error);
    }
}
