import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000', // URL de tu backend Laravel
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getCertificados = () => api.get('/certificados');
export const createCertificado = (certificados) => api.post('/certificados', certificados);
export const deleteCertificado = (id) => api.delete(`/certificados/${id}`);

export const getClientes = () => api.get('/clientes');
export const createClientes = (clientes) => api.post('/clientes', clientes);
export const deleteClientes = (id) => api.delete(`/clientes/${id}`);