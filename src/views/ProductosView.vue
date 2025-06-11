<template> 
    <div class="productos-page">
        <h1> Productos de Ferremas</h1>

        <div v-if="loading">
            <p>Cargando productos...</p>
        </div>

        <div v-else-if="error">
            <p>Error al cargar los productos:{{ console.error(fallo mi negro)
             }}</p>

        </div>

        <div v-else class="productos-grid">
            <div v-for="producto in productos" :key="producto.id" class="producto-card">
                <img :src="producto.imagen" :alt="producto.nombre" class="producto-imagen">
                <h3>{{ producto.nombre }}</h3>
                <p class="producto-descripcion">{{ producto.descripcion }}</p>
                <p class="producto-precio">Precio: ${{ producto.precio }}</p>
                <button @click="agregarAlCarrito(producto)" class="producto-boton">Agregar al carrito</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'; // Necesitas instalar axios: npm install axios

export default {
  name: 'ProductosView',
  data() {
    return {
      productos: [],
      loading: true,
      error: null
    };
  },
  mounted() {
    this.cargarProductos();
  },
  methods: {
    async cargarProductos() {
      this.loading = true;
      this.error = null;
      try {
        // Reemplaza esto con la URL real de tu API o fuente de datos
        const response = await axios.get('URL_DE_TU_API_DE_PRODUCTOS');
        this.productos = response.data;
      } catch (err) {
        this.error = err.message || 'Error desconocido al cargar productos';
      } finally {
        this.loading = false;
      }
    },
    agregarAlCarrito(producto) {
      // Aquí iría la lógica para agregar el producto al carrito
      // (puedes usar Vuex o emitir un evento al componente padre)
      console.log(`Producto "${producto.nombre}" agregado al carrito.`);
      alert(`Producto "${producto.nombre}" agregado al carrito.`);
    }
  }
};
</script>

<style scoped>
/* Estilos para la página de productos */
.productos-page {
  font-family: 'Arial', sans-serif;
  color: #333;
  padding: 20px;
}

.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.producto-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease;
}

.producto-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.producto-imagen {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 5px;
}

.producto-nombre {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
}

.producto-descripcion {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 10px;
}

.producto-precio {
  font-size: 1.1em;
  color: #007bff;
  font-weight: bold;
}

.producto-boton {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.producto-boton:hover {
  background-color: #218838;
}
</style>