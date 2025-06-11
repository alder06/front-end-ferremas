<script setup>
// ...
</script>

<template>
  <div class="container my-5">
    <nav class="mb-4">
      <router-link to="/" class="btn btn-outline-primary me-2">Home (Inicio)</router-link>

      <router-link to="/usuarios" class="btn btn-outline-primary me-2">Usuarios</router-link>

      <router-link to="/compra" class="btn btn-outline-success">Simular Compra</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
/* ... tus estilos ... */
</style>