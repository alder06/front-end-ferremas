<!-- src/views/CompraView.vue -->
<template>
  <div class="container py-5">
    <h1 class="mb-4">Confirmar Compra</h1>

    <div v-if="!cart.items.length" class="alert alert-info">
      Tu carrito está vacío.
      <router-link to="/productos" class="btn btn-link">Volver a productos</router-link>
    </div>

    <div v-else>
      <ul class="list-group mb-4">
        <li
          v-for="item in cart.items"
          :key="item.id"
          class="list-group-item d-flex justify-content-between"
        >
          <span>{{ item.nombre }} × {{ item.cantidad }}</span>
          <strong>$ {{ item.precio * item.cantidad }}</strong>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Total</span>
          <strong>$ {{ cart.cartTotalPrice }}</strong>
        </li>
      </ul>

      <button
        @click="startWebpay"
        :disabled="loading"
        class="btn btn-primary btn-lg"
      >
        {{ loading ? 'Redirigiendo…' : 'Pagar con Webpay' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/services/cart'
import axios from 'axios'

const cart = useCartStore()
const loading = ref(false)

const startWebpay = async () => {
  loading.value = true
  try {
    const { data } = await axios.post('/api/payments/create-webpay-transaction', {
      items: cart.items
    })
    // Transbank devuelve { url, token }
    window.location.href = data.url // Redirige al host de Webpay
  } catch (err) {
    console.error(err)
    alert('Error al iniciar Webpay')
    loading.value = false
  }
}
</script>
