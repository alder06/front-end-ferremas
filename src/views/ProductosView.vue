<template>
  <div class="productos-page">
    <h1>Productos de FerreMas</h1>

    <div v-if="loading">
      <p>Cargando productos...</p>
    </div>

    <div v-else-if="error">
      <p>Error al cargar los productos: {{ error }}</p>
    </div>

    <div v-else class="productos-grid">
      <div v-for="producto in productos" :key="producto.id" class="producto-card">
        <img :src="producto.imagen" :alt="producto.nombre" class="producto-imagen">
        <h3>{{ producto.nombre }}</h3>
        <p class="producto-descripcion">{{ producto.descripcion }}</p>
        <p class="producto-precio">Precio: ${{ producto.precio }}</p>
        <button @click="addToCart(producto)" class="producto-boton">Agregar al carrito</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useCartStore } from '../services/cart'; // Importa tu store de Pinia

// Inicializa el store
const cartStore = useCartStore();

const productos = ref([]);
const loading = ref(true);
const error = ref(null);

async function cargarProductos() {
  loading.value = true;
  error.value = null;
  try {
    const response = await axios.get(''); // ¡Actualiza tu URL!
    productos.value = response.data;
  } catch (err) {
    error.value = err.message || 'Error desconocido al cargar productos';
  } finally {
    loading.value = false;
  }
}

function addToCart(producto) {
  cartStore.addItem(producto); // Llama a la acción addItem del store
  alert(`"${producto.nombre}" agregado al carrito. Cantidad total en carrito: ${cartStore.cartTotalUnits}`);
}

onMounted(() => {
  cartStore.loadCartFromLocalStorage(); // Carga el carrito al iniciar la app/componente
  cargarProductos();
});
</script>

<style scoped>
/* Tus estilos existentes para productos */
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