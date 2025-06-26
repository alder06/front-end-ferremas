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
import { getOrCreateCartId } from '@/composables/useCartId'

const cart = useCartStore()
const loading = ref(false)

const startWebpay = async () => {
  loading.value = true
  try {
    const cartId = await getOrCreateCartId()
    const { data } = await axios.post('http://localhost:3000/api/payments/pay', {
      cartId
    })
    window.location.href = data.url
  } catch (err) {
    console.error(err)
    alert('Error al iniciar Webpay')
  } finally {
    loading.value = false
  }
}
</script>

