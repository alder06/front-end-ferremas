<template>
  <div class="register-page">
    <div class="register-card">
      <h1>Crear Cuenta en FerreMas</h1>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input
            type="text"
            id="name"
            v-model="name"
            required
            placeholder="Tu nombre completo"
          />
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="tu@correo.com"
          />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Mínimo 6 caracteres"
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            placeholder="Repite tu contraseña"
          />
        </div>
        <button type="submit" :disabled="loading" class="btn primary-btn">
          {{ loading ? 'Registrando...' : 'Registrar' }}
        </button>
        <div v-if="error" class="alert alert-danger mt-3">
          {{ error }}
        </div>
        <div v-if="successMessage" class="alert alert-success mt-3">
          {{ successMessage }}
        </div>
      </form>
      <p class="mt-3">
        ¿Ya tienes cuenta? <router-link to="/login">Inicia sesión aquí</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../services/auth'; // Tu store de autenticación

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);
const error = ref(null);
const successMessage = ref(null);

const router = useRouter();
const authStore = useAuthStore();

const handleRegister = async () => {
  loading.value = true;
  error.value = null; // Reiniciar errores anteriores
  successMessage.value = null; // Reiniciar mensajes de éxito

  // Validaciones básicas en el frontend
  if (password.value !== confirmPassword.value) {
    error.value = 'Las contraseñas no coinciden.';
    loading.value = false;
    return;
  }

  if (password.value.length < 6) {
    error.value = 'La contraseña debe tener al menos 6 caracteres.';
    loading.value = false;
    return;
  }

  try {
    // Llama a la acción register del store de autenticación
    await authStore.register(name.value, email.value, password.value);

    successMessage.value = '¡Registro exitoso! Ahora puedes iniciar sesión.';
    // Opcional: Redirigir al usuario al login después de un breve retraso
    setTimeout(() => {
      router.push('/login');
    }, 2000);

  } catch (err) {
    // Manejar errores de registro
    if (err.response && err.response.data && err.response.data.message) {
      error.value = err.response.data.message; // Mensaje de error desde el backend
    } else {
      error.value = 'Ocurrió un error al registrar el usuario. Inténtalo de nuevo.';
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px); /* Ajusta para que ocupe casi toda la pantalla */
  background-color: #f0f2f5;
  padding: 20px;
}

.register-card {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px; /* Un poco más ancho que el login */
  text-align: center;
}

h1 {
  color: #0056b3;
  margin-bottom: 30px;
  font-size: 2em;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1em;
}

.form-group input:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  outline: none;
}

.btn {
  display: block;
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.primary-btn {
  background-color: #28a745; /* Color verde para registrar */
  color: white;
  border: none;
}

.primary-btn:hover:not(:disabled) {
  background-color: #218838;
}

.primary-btn:disabled {
  background-color: #90ee90; /* Verde más claro cuando está deshabilitado */
  cursor: not-allowed;
}

.alert {
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
  font-size: 0.9em;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.mt-3 {
  margin-top: 1rem !important;
}
</style>