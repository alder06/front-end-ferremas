<script setup>

</script>

<template>
  <div class="container my-5">
    <nav class="mb-4">
      <router-link to="/" class="btn btn-outline-primary me-2"
        >Usuarios</router-link
      >
      <router-link to="/compra" class="btn btn-outline-success"
        >Simular Compra</router-link
      >
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
