import { defineStore } from 'pinia';
import axios from 'axios';

const AUTH_API_URL = 'http://127.0.0.1:8000/api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: (() => {
      try {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
      } catch {
        return null;
      }
    })(),
    isAuthenticated: !!localStorage.getItem('user'),
  }),

  getters: {
    clientId: (state) => state.user?.client_id || null,
  },

  actions: {
    async loginFuncionario(email, password) {
      try {
        const response = await axios.post(`${AUTH_API_URL}/login/user/`, { email, password });
        const { user } = response.data;
        this.user = user;
        this.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify(user));
        return true;
      } catch (error) {
        this.logout();
        throw error;
      }
    },

    async loginCliente(email, password) {
      try {
        const response = await axios.post(`${AUTH_API_URL}/login/client/`, { email, password });

        // En respuesta recibes client_id y email, sin token
        const { client_id, email } = response.data;
        const user = { client_id, email };

        this.user = user;
        this.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify(user));

        return true;
      } catch (error) {
        this.logout();
        throw error;
      }
    },

    logout() {
      this.user = null;
      this.isAuthenticated = false;
      localStorage.removeItem('user');
    },

    initializeAuth() {
      // No hay token, no se configuran cabeceras
    },
  },
});
