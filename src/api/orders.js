import api from './config';

export const getOrders = () => {
  return api.get('/orders');
};

export const getOrder = (id) => {
  return api.get(`/orders/${id}`);
};

export const createOrder = (orderData) => {
  return api.post('/orders', orderData);
};

export const updateOrder = (id, orderData) => {
  return api.put(`/orders/${id}`, orderData);
};

export const deleteOrder = (id) => {
  return api.delete(`/orders/${id}`);
};
