// src/services/paymentService.js
import { productsApiClient as api } from './apiNode';

const paymentService = {
  /**
   * Inicia un proceso de pago (ej. con Transbank).
   * POST /api/payments/pay
   * @param {object} paymentData - Los datos necesarios para iniciar el pago (ej. { amount: 10000, buyOrder: '...' }).
   */
  initPayment(paymentData) {
    return api.post('payments/pay', paymentData);
  },

  /**
   * Confirma un pago.
   * POST /api/payments/confirm
   * @param {object} confirmationData - Los datos de confirmación del pago (ej. { token_ws: '...' }).
   */
  confirmPayment(confirmationData) {
    return api.post('payments/confirm', confirmationData);
  },

  // La ruta GET /api/payments/confirm que tienes en el backend es para redirección interna de Transbank
  // y no se llama directamente desde el frontend vía Axios.
};

export default paymentService;