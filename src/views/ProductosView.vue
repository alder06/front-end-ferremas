<template>
  <div class="container mt-4">
    <h2 class="mb-3">Listado de Productos</h2>

    <div v-if="!loading && products.length === 0" class="alert alert-warning">
      No hay productos disponibles.
    </div>

    <div class="row">
      <div
        v-for="product in products"
        :key="product.id"
        class="col-md-4 mb-3"
      >
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p><strong>Precio:</strong> ${{ product.price }}</p>
            <button @click="addToCart(product)" class="btn btn-primary w-100 mt-2">
              🛒 Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="loading" class="text-center">Cargando productos...</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import productService from '@/services/productService';
import axios from 'axios';
import { getOrCreateCartId } from '@/composables/useCartId';

const products = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const result = await productService.getAll();
    products.value = result;
  } catch (err) {
    console.error('Error al cargar productos:', err);
    error.value = 'Error al cargar los productos.';
  } finally {
    loading.value = false;
  }
});

const addToCart = async (product) => {
  try {
    const cartId = await getOrCreateCartId()
    await axios.post(`http://localhost:3000/api/cart/${cartId}/items`, {
      product_id: product.id,
      quantity: 1
    })
    alert('Producto agregado al carrito.')
  } catch (err) {
    console.error('Error agregando al carrito:', err)
    alert('Error al agregar producto')
  }
}

</script>
