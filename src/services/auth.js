import { defineStore } from 'pinia';
import axios from 'axios'; // Necesitas instalar axios: npm install axios

// URL base de tu API de backend para autenticación
const AUTH_API_URL = 'http://localhost:3000/api/auth'; // ¡CAMBIA ESTO POR LA URL REAL DE TU BACKEND!

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null, // Guarda info del usuario
    token: localStorage.getItem('token') || null, // Guarda el JWT
    isAuthenticated: !!localStorage.getItem('token'), // Booleano para saber si está logueado
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await axios.post(`${AUTH_API_URL}/login`, { email, password });
        const { user, token } = response.data;

        // Guarda el token y la información del usuario en el estado y en LocalStorage
        this.user = user;
        this.token = token;
        this.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);

        // Configura el token en los headers por defecto de Axios para futuras peticiones
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        return true; // Login exitoso
      } catch (error) {
        this.logout(); // Limpia el estado si el login falla
        throw error; // Lanza el error para que el componente de login lo maneje
      }
    },

    async register(name, email, password) {
      try {
        const response = await axios.post(`${AUTH_API_URL}/register`, { name, email, password });
        // Después de registrar, podrías automáticamente loguear al usuario
        // o redirigirlo a la página de login
        return response.data; // Retorna la respuesta del registro
      } catch (error) {
        throw error;
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      // Limpia el token de los headers de Axios
      delete axios.defaults.headers.common['Authorization'];
    },

    // Acción para inicializar el estado de autenticación al cargar la app
    initializeAuth() {
      if (this.token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
      }
    }
  },
});