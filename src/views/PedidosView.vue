<template>
  <div class="container">
    <h2 class="mb-4">Listado de Pedidos</h2>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Cliente</th>
          <th>Fecha</th>
          <th>Productos</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pedido in pedidos" :key="pedido.id">
          <td>{{ pedido.id }}</td>
          <td>{{ pedido.cliente_nombre }}</td>
          <td>{{ pedido.fecha }}</td>
          <td>
            <ul>
              <li v-for="item in pedido.productos" :key="item.id">
                {{ item.nombre }} (x{{ item.cantidad }})
                
              </li>
            </ul>
          </td>
          <td>${{ pedido.total }}</td>
        </tr>
      </tbody>
    </table>

    <div v-if="loading" class="text-center">Cargando pedidos...</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const pedidos = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/pedidos/")
    pedidos.value = response.data
  } catch (err) {
    error.value = "Error al cargar los pedidos"
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
table th, table td {
  vertical-align: middle;
}
</style>
