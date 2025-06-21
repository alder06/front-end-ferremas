<script setup>
import { useCartStore } from '@/services/cart'

defineProps(['product'])

const cart = useCartStore()

const agregarAlCarrito = () => {
  cart.addItem(product)
}
</script>

<template>
  <!-- Contenido del producto -->
  <button @click="agregarAlCarrito" class="bg-blue-600 text-white px-3 py-1 rounded mt-2">Agregar al carrito</button>
</template>
