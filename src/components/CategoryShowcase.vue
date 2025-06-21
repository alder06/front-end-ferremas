<template>
  <section class="p-6 bg-gray-100">
    <h2 class="text-2xl mb-4">Categorías Principales</h2>
    <div class="flex flex-wrap gap-4">
      <div v-for="cat in categories" :key="cat.name" class="w-1/3 p-4 bg-white shadow rounded text-center">
        <img :src="cat.image" class="h-24 mx-auto" />
        <h3 class="mt-2 font-medium">{{ cat.name }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  { name: 'Herramientas', image: '/assets/herramientas.jpg' },
  { name: 'Materiales de Construcción', image: '/assets/materiales.jpg' },
  { name: 'Equipos de Seguridad', image: '/assets/seguridad.jpg' }
]
</script>
