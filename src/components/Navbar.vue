<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
    <div class="container-fluid">
      <!-- Logo -->
      <router-link class="navbar-brand fw-bold" to="/">Ferremas</router-link>

      <!-- Botón hamburguesa -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menú -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><router-link class="nav-link" to="/">Inicio</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/productos">Productos</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/categorias">Categorías</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/contacto">Contacto</router-link></li>
        </ul>

        <!-- Búsqueda -->
        <form class="d-flex me-3" @submit.prevent="buscar">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Buscar productos..."
            aria-label="Buscar"
            v-model="searchQuery"
          />
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>

        <!-- Carrito -->
        <router-link class="btn btn-outline-primary position-relative me-3" to="/carrito" aria-label="Carrito">
          🛒
          <span
            v-if="cartTotalUnits > 0"
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            {{ cartTotalUnits }}
          </span>
        </router-link>

        <!-- Autenticación -->
        <div class="d-flex align-items-center">
          <template v-if="isAuth">
            <router-link to="/cuenta" class="btn btn-outline-secondary me-2">Mi Cuenta</router-link>
            <button @click="handleLogout" class="btn btn-outline-danger">Cerrar Sesión</button>
          </template>

          <template v-else>
            <router-link to="/login-funcionario" class="btn btn-outline-success me-2">Ingreso Funcionarios</router-link>
            <router-link to="/login-cliente" class="btn btn-outline-primary me-2">Ingreso Clientes</router-link>
            <router-link to="/registrar" class="btn btn-outline-info">Registrarse</router-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/services/cart'
import { useAuthStore } from '@/services/auth'
import { useRouter } from 'vue-router'

// Store
const cart = useCartStore()
const cartTotalUnits = computed(() => cart.cartTotalUnits)
const authStore = useAuthStore()
const router = useRouter()

const isAuth = computed(() => authStore.isAuthenticated)

const handleLogout = () => {
  authStore.logout()
  router.push('/') // o redirige a login-funcionario si prefieres
}

// Búsqueda
const searchQuery = ref('')
const buscar = () => {
  alert(`Buscando: ${searchQuery.value}`)
}
</script>

<style scoped>
.btn.position-relative {
  padding-right: 2rem;
}
.badge {
  font-size: 0.75rem;
}
</style>
