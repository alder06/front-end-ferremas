<template>
  <LoginBase
    title="Iniciar Sesión como Funcionario"
    :on-login="handleLogin"
    :error="error"
    :loading="loading"
  />
</template>

<script setup>
import LoginBase from './LoginBase.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../services/auth';

const router = useRouter();
const authStore = useAuthStore();

const loading = ref(false);
const error = ref(null);

const handleLogin = async (email, password) => {
  loading.value = true;
  error.value = null;
  try {
    await authStore.loginFuncionario(email, password);
    router.push('/usuarios');
  } catch (err) {
    error.value = 'Credenciales incorrectas o error de conexión.';
  } finally {
    loading.value = false;
  }
};
</script>