<template>
  <div class="container my-5">
    <nav class="mb-4">
      <router-link to="/" class="btn btn-outline-primary me-2">Home (Inicio)</router-link>
      <router-link to="/usuarios" class="btn btn-outline-primary me-2">Usuarios</router-link>
      <router-link to="/productos" class="btn btn-outline-info me-2">
        Productos
      </router-link>
      <router-link to="/compra" class="btn btn-outline-success">
        Simular Compra <span class="badge bg-secondary">{{ cartStore.cartTotalUnits }}</span>
      </router-link>

      <template v-if="authStore.isAuthenticated">
        <router-link to="/usuarios" class="btn btn-outline-primary me-2">Usuarios</router-link>
        <button @click="handleLogout" class="btn btn-outline-danger">Cerrar Sesión</button>
      </template>
      <template v-else>
        <router-link to="/login" class="btn btn-outline-success">Iniciar Sesión</router-link>
        <router-link to="/registrar" class="btn btn-outline-info">Registrarse</router-link>
      </template>

    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { useCartStore } from './stores/cart';
import { useAuthStore } from './stores/auth'; // Importa el store de autenticación
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const authStore = useAuthStore(); // Inicializa el store de autenticación
const router = useRouter();

const handleLogout = () => {
  authStore.logout(); // Llama a la acción logout del store
  router.push('/login'); // Redirige al login después de cerrar sesión
};
</script>

<style scoped>
/* Tus estilos existentes */
.badge {
    margin-left: 5px;
    padding: 0.35em 0.65em;
    font-size: 0.75em;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    background-color: #6c757d; /* Color gris de Bootstrap */
    color: white;
}
</style>