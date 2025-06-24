import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/users/";

export default {
  getAll() {
    return axios.get(API_URL);
  },
  get(id) {
    return axios.get(`${API_URL}${id}/`);
  },
  create(user) {
    return axios.post(API_URL, user);
  },
  update(id, user) {
    return axios.put(`${API_URL}${id}/`, user);
  },
  delete(id) {
    return axios.delete(`${API_URL}${id}/`);
  },
};
