<!-- src/views/CarritoView.vue -->
<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Tu Carrito</h1>

    <div v-if="cart.items.length === 0">
      <p>El carrito está vacío.</p>
    </div>

    <div v-else>
      <table class="w-full text-left mb-6">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart.items" :key="item.id">
            <td>{{ item.nombre }}</td>
            <td>
              <input type="number" v-model.number="item.cantidad" @change="actualizarCantidad(item.id, item.cantidad)" class="w-16 p-1 border rounded" />
            </td>
            <td>${{ item.precio }}</td>
            <td>${{ item.precio * item.cantidad }}</td>
            <td>
              <button @click="cart.removeItem(item.id)" class="text-red-600">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="text-xl font-semibold">Total: ${{ cart.cartTotalPrice }}</p>

      <button @click="cart.clearCart()" class="mt-4 bg-red-600 text-white px-4 py-2 rounded">Vaciar Carrito</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/services/cart'

const cart = useCartStore()

const actualizarCantidad = (id, cantidad) => {
  cart.updateItemQuantity(id, cantidad)
}
</script>
