<template>
  <div class="login-page">
    <div class="login-card">
      <h1>{{ title }}</h1>
      <form @submit.prevent="submitLogin">
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" v-model="email" required placeholder="tu@correo.com" />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required placeholder="********" />
        </div>
        <button type="submit" :disabled="loading" class="btn primary-btn">
          {{ loading ? 'Iniciando...' : 'Acceder' }}
        </button>
        <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({ title: String, onLogin: Function, error: String, loading: Boolean });

const email = ref('');
const password = ref('');

const submitLogin = () => {
  props.onLogin(email.value, password.value);
};
</script>

<style scoped>
.login-page { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f0f2f5; }
.login-card { background: white; padding: 40px; border-radius: 10px; width: 100%; max-width: 400px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); text-align: center; }
.form-group { margin-bottom: 20px; text-align: left; }
.btn { width: 100%; padding: 12px; font-size: 1em; font-weight: bold; }
.alert-danger { background: #f8d7da; color: #721c24; padding: 10px; border-radius: 5px; }
</style>
