<!-- src/views/CarritoView.vue -->
<template>
  <div class="container py-5">
    <h1 class="mb-4">Tu Carrito</h1>

    <div v-if="!cart.items.length" class="alert alert-info">
      Tu carrito está vacío.
    </div>

    <div v-else class="row">
      <!-- Listado de productos en carrito -->
      <div class="col-lg-8">
        <div
          v-for="item in cart.items"
          :key="item.id"
          class="card mb-3 shadow-sm"
        >
          <div class="row g-0 align-items-center">
            <div class="col-md-3">
              <img
                :src="item.imagen || 'https://via.placeholder.com/150'"
                class="img-fluid rounded-start"
                alt="Imagen del producto"
              />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">{{ item.nombre }}</h5>
                <p class="card-text text-muted">
                  Precio unitario: ${{ item.precio }}
                </p>
                <div class="input-group input-group-sm w-50">
                  <button
                    class="btn btn-outline-secondary"
                    @click="decrement(item)"
                  >−</button>
                  <input
                    type="text"
                    class="form-control text-center"
                    :value="item.cantidad"
                    readonly
                  />
                  <button
                    class="btn btn-outline-secondary"
                    @click="increment(item)"
                  >+</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 text-center">
              <div class="card-body">
                <p class="h5">$ {{ item.precio * item.cantidad }}</p>
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="cart.removeItem(item.id)"
                >
                  🗑️ Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Resumen de la orden -->
      <div class="col-lg-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h4 class="card-title">Resumen</h4>
            <ul class="list-group list-group-flush mb-3">
              <li class="list-group-item d-flex justify-content-between">
                <span>Unidades</span>
                <strong>{{ cart.cartTotalUnits }}</strong>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Subtotal</span>
                <strong>$ {{ cart.cartTotalPrice }}</strong>
              </li>
            </ul>
            <!-- Botón para ir a la vista de compra -->
            <router-link
              to="/compra"
              class="btn btn-primary w-100 mb-2"
            >
              🛒 Ir a pagar
            </router-link>
            <button
              class="btn btn-outline-secondary w-100"
              :disabled="!cart.items.length"
              @click="cart.clearCart()"
            >
              Vaciar carrito
            </button>
            <router-link to="/productos" class="btn btn-link w-100 mt-3">
              ← Seguir comprando
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/services/cart'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()

// Funciones para cambiar cantidad
const increment = item => cart.addItem(item, 1)
const decrement = item => cart.updateItemQuantity(item.id, item.cantidad - 1)
</script>
