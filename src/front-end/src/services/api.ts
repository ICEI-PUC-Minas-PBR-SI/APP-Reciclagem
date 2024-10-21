import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const createUser = async (userData: any) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
};

export const createEstablishment = async (establishmentData: any) => {
  try {
    const response = await api.post('/establishment', establishmentData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar estabelecimento:', error);
    throw error;
  }
};

export const loginUser = async ({ email, password }: any) => {
  const response = await api.post('/auth/login', {
    email,
    password,
  });
  return response.data;
};
