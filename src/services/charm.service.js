import axiosInstance from './axios.config';

class CharmService {
    getAllCharms(params = {}) {
        return axiosInstance.get('/Charm', { params });
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

    uploadCharmGif(gifData) {
        return axiosInstance.post('/Charm/upload-gif', gifData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    getCharmStockById(id) {
        return axiosInstance.get(`/Charm/${id}/stock`);
    }

    getAllCharmStock(params = {}) {
        return axiosInstance.get('/Charm/stock', { params });
    }

    updateCharmQuantity(id, quantityData) {
        return axiosInstance.put(`/Charm/${id}/quantity`, quantityData);
    }

    addCharmStock(id, quantityData) {
        return axiosInstance.post(`/Charm/${id}/add-stock`, quantityData);
    }

    searchCharms(searchParams = {}) {
        return axiosInstance.get('/Charm/search', { params: searchParams });
    }

    // You can add other methods here for specific charm operations (e.g., getCharmById)
}

export default new CharmService(); 