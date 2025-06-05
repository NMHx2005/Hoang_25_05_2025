import axiosInstance from './axios.config';

const ProductService = {
    // Get all products
    getAllProducts: async (params = {}) => {
        const response = await axiosInstance.get('/bracelete', { params });
        return response.data;
    },

    // Get product by ID
    getProductById: async (id) => {
        const response = await axiosInstance.get(`/bracelete/${id}`);
        return response.data;
    },

    // Create new product
    createProduct: async (productData) => {
        const response = await axiosInstance.post('/bracelete', productData);
        return response.data;
    },

    // Update product
    updateProduct: async (id, productData) => {
        const response = await axiosInstance.put(`/bracelete/${id}`, productData);
        return response.data;
    },

    // Delete product
    deleteProduct: async (id) => {
        const response = await axiosInstance.delete(`/bracelete/${id}`);
        return response.data;
    },

    // Get products by category
    getProductsByCategory: async (categoryId) => {
        const response = await axiosInstance.get(`/bracelete/category/${categoryId}`);
        return response.data;
    },

    // Search products
    searchProducts: async (searchParams = {}) => {
        const response = await axiosInstance.get('/bracelete/search', {
            params: searchParams
        });
        return response.data;
    },

    // Get stock by product ID
    getStockById: async (id) => {
        const response = await axiosInstance.get(`/bracelete/${id}/stock`);
        return response.data;
    },

    // Get all products stock
    getAllStock: async () => {
        const response = await axiosInstance.get('/bracelete/stock');
        return response.data;
    },

    // Add quantity to product stock
    addQuantity: async (id, quantity) => {
        const response = await axiosInstance.post(`/bracelete/${id}/add-quantity`, { quantity });
        return response.data;
    },

    // Update product quantity
    updateQuantity: async (id, quantity) => {
        const response = await axiosInstance.put(`/bracelete/${id}/quantity`, { quantity });
        return response.data;
    }
};

export default ProductService; 