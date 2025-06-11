// src/stores/cart.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], // Array de productos en el carrito. Cada item tendrá: { id, nombre, precio, cantidad, ... }
  }),
  getters: {
    // Getter para obtener el número total de artículos diferentes en el carrito
    cartItemCount: (state) => state.items.length,

    // Getter para obtener la cantidad total de unidades en el carrito (ej. 2 martillos + 3 tornillos = 5 unidades)
    cartTotalUnits: (state) => {
      return state.items.reduce((total, item) => total + item.cantidad, 0);
    },

    // Getter para calcular el total monetario del carrito
    cartTotalPrice: (state) => {
      return state.items.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    },
  },
  actions: {
    /**
     * Agrega un producto al carrito o incrementa su cantidad si ya existe.
     * @param {Object} product - El objeto del producto a agregar (debe tener id, nombre, precio).
     * @param {number} [quantity=1] - La cantidad a agregar (por defecto 1).
     */
    addItem(product, quantity = 1) {
      const existingItem = this.items.find(item => item.id === product.id);

      if (existingItem) {
        // Si el producto ya está en el carrito, incrementa su cantidad
        existingItem.cantidad += quantity;
      } else {
        // Si el producto no está, agrégalo con la cantidad especificada
        this.items.push({ ...product, cantidad: quantity });
      }
      this.saveCartToLocalStorage(); // Guarda el carrito en LocalStorage
    },

    /**
     * Elimina un producto del carrito.
     * @param {string|number} productId - El ID del producto a eliminar.
     */
    removeItem(productId) {
      this.items = this.items.filter(item => item.id !== productId);
      this.saveCartToLocalStorage();
    },

    /**
     * Actualiza la cantidad de un producto específico en el carrito.
     * Si la cantidad es 0 o menos, elimina el producto.
     * @param {string|number} productId - El ID del producto a actualizar.
     * @param {number} newQuantity - La nueva cantidad.
     */
    updateItemQuantity(productId, newQuantity) {
      const item = this.items.find(item => item.id === productId);
      if (item) {
        if (newQuantity <= 0) {
          this.removeItem(productId);
        } else {
          item.cantidad = newQuantity;
          this.saveCartToLocalStorage();
        }
      }
    },

    /**
     * Vacía completamente el carrito.
     */
    clearCart() {
      this.items = [];
      this.saveCartToLocalStorage();
    },

    /**
     * Guarda el estado actual del carrito en LocalStorage.
     */
    saveCartToLocalStorage() {
      localStorage.setItem('ferremas_cart', JSON.stringify(this.items));
    },

    /**
     * Carga el estado del carrito desde LocalStorage al iniciar el store.
     */
    loadCartFromLocalStorage() {
      const storedCart = localStorage.getItem('ferremas_cart');
      if (storedCart) {
        this.items = JSON.parse(storedCart);
      }
    },
  },
});