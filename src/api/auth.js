import api from './config';

export const login = (username, password) => {
  return api.post('/admin/login', { username, password });
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const checkAuth = () => {
  return api.get('/admin/check-auth');
};
