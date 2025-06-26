// src/services/productService.js
import axios from 'axios';

const PRODUCT_API_URL = 'http://localhost:3000/api/products';

export default {
  getAll() {
    return axios
      .get(PRODUCT_API_URL)
      .then(res =>
        res.data.map(p => ({
          id:          p.product_id,
          name:        p.product_name,
          description: `SKU: ${p.sku_product}`,
          price:       p.price_product,
        }))
      );
      
  },
  get(id) {
    return axios
      .get(`${PRODUCT_API_URL}/${id}`)
      .then(res => {
        const p = res.data;
        return {
          id:          p.product_id,
          name:        p.product_name,
          description: `SKU: ${p.sku_product}`,
          price:       p.price_product,
        };
      });
  }
};
