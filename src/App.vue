<template>
  <div class="container my-5">
    <!-- Navbar -->
    <Navbar />

    <!-- Botones condicionales según el tipo de usuario -->
    <div class="my-3">
      <!-- FUNCIONARIO: Usuarios + Pedidos -->
      <template v-if="esFuncionario">
        <router-link to="/usuarios" class="btn btn-outline-primary me-2">
          Usuarios
        </router-link>
        <router-link to="/pedidos" class="btn btn-outline-warning me-2">
          Pedidos
        </router-link>
      </template>

      <!-- CLIENTE: Simular Compra -->
      <router-link
        v-if="esCliente"
        to="/compra"
        class="btn btn-outline-success"
      >
        Simular Compra
        <span class="badge bg-secondary">{{ cartStore.cartTotalUnits }}</span>
      </router-link>

      <!-- Botón Cerrar Sesión: para ambos -->
      <template v-if="authStore.isAuthenticated">
        <button @click="handleLogout" class="btn btn-outline-danger ms-2">
          Cerrar Sesión
        </button>
      </template>
    </div>

    <!-- Contenido dinámico -->
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import { useCartStore } from './services/cart'
import { useAuthStore } from './services/auth'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const cartStore = useCartStore()
const authStore = useAuthStore()
const router = useRouter()

const esFuncionario = computed(() => authStore.user?.rol === 1)
const esCliente = computed(() => authStore.user?.rol === 2)

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
