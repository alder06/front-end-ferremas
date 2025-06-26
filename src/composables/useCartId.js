import axios from 'axios';
import { useAuthStore } from '@/services/auth';

export async function getOrCreateCartId() {
  const authStore = useAuthStore();
  const client_id = authStore.clientId;

  if (!client_id) {
    throw new Error('Client ID no definido. El usuario debe estar logueado.');
  }

  let cartId = localStorage.getItem('cartId');

  if (!cartId) {
    const { data } = await axios.post('http://localhost:3000/api/cart', {
      client_id
    });
    cartId = data.cart_id;
    localStorage.setItem('cartId', cartId);
  }

  return cartId;
}
