<template>
  <div class="container my-5">
    <!-- Navbar -->
    <Navbar />

    <!-- Botones y enlaces, envueltos en un div para estructura -->
    <div class="my-3">
      <router-link to="/usuarios" class="btn btn-outline-primary me-2">Usuarios</router-link>
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
    </div>

    <!-- Aquí va el contenido de la ruta activa -->
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import { useCartStore } from './services/cart'
import { useAuthStore } from './services/auth'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const authStore = useAuthStore()
const router = useRouter()

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<style scoped>
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
  background-color: #6c757d;
  color: white;
}
</style>
