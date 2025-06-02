import axiosInstance from './axios.config';

class CharmService {
    getAllCharms() {
        return axiosInstance.get('/Charm');
    }

    getCharmById(id) {
        return axiosInstance.get(`/Charm/${id}`);
    }

    createCharm(data) {
        return axiosInstance.post('/Charm', data);
    }

    updateCharm(id, data) {
        return axiosInstance.put(`/Charm/${id}`, data);
    }

    deleteCharm(id) {
        return axiosInstance.delete(`/Charm/${id}`);
    }

    getCharmStockById(id) {
        return axiosInstance.get(`/Charm/${id}/stock`);
    }

    getAllCharmStock() {
        return axiosInstance.get('/Charm/stock');
    }

    updateCharmQuantity(id, quantity) {
        return axiosInstance.put(`/Charm/${id}/quantity`, { quantity });
    }

    addCharmStock(id, quantity) {
        return axiosInstance.post(`/Charm/${id}/add-stock`, { quantity });
    }

    // You can add other methods here for specific charm operations (e.g., getCharmById)
}

export default new CharmService(); 