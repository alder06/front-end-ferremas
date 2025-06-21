<template>
  <div class="login-page">
    <div class="login-card">
      <h1>Iniciar Sesión en Ferremas</h1>
      <form @submit.prevent="handleLogin">
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
            placeholder="********"
          />
        </div>
        <button type="submit" :disabled="loading" class="btn primary-btn">
          {{ loading ? 'Iniciando...' : 'Acceder' }}
        </button>
        <div v-if="error" class="alert alert-danger mt-3">
          {{ error }}
        </div>
      </form>
      <p class="mt-3">
        ¿No tienes cuenta? <router-link to="/registrar">Regístrate aquí</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../services/auth'; // Importa tu store de autenticación (lo crearemos en el paso 3)

const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref(null);

const router = useRouter();
const authStore = useAuthStore(); // Inicializa el store de autenticación

const handleLogin = async () => {
  loading.value = true;
  error.value = null; // Reiniciar errores anteriores

  try {
    // Llama a la acción login del store de autenticación
    // Esta acción se encargará de comunicarse con el backend
    await authStore.login(email.value, password.value);

    // Si el login fue exitoso, redirige al usuario a la página de inicio o a donde deba ir
    router.push('/');
  } catch (err) {
    // Manejar errores de autenticación
    if (err.response && err.response.data && err.response.data.message) {
      error.value = err.response.data.message; // Mensaje de error desde el backend
    } else {
      error.value = 'Credenciales incorrectas o error de conexión. Inténtalo de nuevo.';
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px); /* Ajusta para que ocupe casi toda la pantalla */
  background-color: #f0f2f5;
  padding: 20px;
}

.login-card {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
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
  background-color: #007bff;
  color: white;
  border: none;
}

.primary-btn:hover:not(:disabled) {
  background-color: #0056b3;
}

.primary-btn:disabled {
  background-color: #a8d1ff;
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

.mt-3 {
  margin-top: 1rem !important; /* Estilo de Bootstrap para margen superior */
}
</style>