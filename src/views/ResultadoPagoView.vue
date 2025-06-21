<template>
  <div class="container py-5 text-center">
    <h1 v-if="success">¡Pago Exitoso!</h1>
    <h1 v-else>Pago Fallido</h1>
    <p v-if="success">Gracias por tu compra.</p>
    <p v-else>Hubo un problema procesando tu pago.</p>
    <router-link to="/" class="btn btn-primary mt-3">Volver al Inicio</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const token = route.query.token_ws
const success = !!token // o verifica vía backend adicional
</script>
