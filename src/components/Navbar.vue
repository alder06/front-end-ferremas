<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
    <div class="container-fluid">
      <!-- Logo o marca -->
      <router-link class="navbar-brand fw-bold" to="/">FerreMas</router-link>

      <!-- Botón hamburguesa para móvil -->
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

      <!-- Menú colapsable -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/productos">Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/categorias">Categorías</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacto">Contacto</router-link>
          </li>
        </ul>

        <!-- Barra de búsqueda -->
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

        <!-- Icono carrito -->
        <router-link class="btn btn-outline-primary position-relative me-3" to="/carrito" aria-label="Carrito de compras">
          🛒
          <span
            v-if="cartTotalUnits > 0"
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            {{ cartTotalUnits }}
          </span>
        </router-link>

        <!-- Login o cuenta -->
        <div>
          <router-link
            v-if="isAuth"
            to="/cuenta"
            class="btn btn-outline-secondary"
          >
            Mi Cuenta
            <button
            v-if="isAuth"
            @click="handleLogout"
            class="btn btn-outline-danger"
          >
            Cerrar Sesión
          </button>
          </router-link>

          <template v-else>
            <router-link to="/login" class="btn btn-outline-success">Iniciar Sesión</router-link>
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

// Estado carrito
const cart = useCartStore()
const cartTotalUnits = computed(() => cart.cartTotalUnits)

// Simulación de autenticación (reemplaza con store real)
const isAuth = ref(false)

// Búsqueda (simple)
const searchQuery = ref('')
const buscar = () => {
  alert(`Buscando: ${searchQuery.value}`)
}
</script>

<style scoped>
/* Ajuste para que el badge del carrito quede bien */
.btn.position-relative {
  padding-right: 2rem;
}
.badge {
  font-size: 0.75rem;
}
</style>
