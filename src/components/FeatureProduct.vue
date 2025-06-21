<template>
  <section class="p-6">
    <h2 class="text-2xl mb-4">Productos Destacados</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

// Simulación
const products = [
  { id: 1, nombre: 'Taladro', precio: 49990, imagen: '/assets/taladro.jpg' },
  { id: 2, nombre: 'Martillo', precio: 8990, imagen: '/assets/martillo.jpg' },
  { id: 3, nombre: 'Caja de herramientas', precio: 29990, imagen: '/assets/caja.jpg' }
]
</script>
