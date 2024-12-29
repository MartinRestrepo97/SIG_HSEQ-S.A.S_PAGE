import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api', // URL de tu backend Laravel
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getCertificados = () => api.get('/certificados');
export const createCertificado = (certificado) => api.post('/certificados', certificado);
export const deleteCertificado = (id) => api.delete(`/certificados/${id}`);

export const getClientes = () => api.get('/clientes');
export const createCliente = (cliente) => api.post('/clientes', cliente);
export const deleteCliente = (id) => api.delete(`/clientes/${id}`);