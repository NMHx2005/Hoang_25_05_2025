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
    searchProducts: async (searchTerm) => {
        const response = await axiosInstance.get('/bracelete/search', {
            params: { q: searchTerm }
        });
        return response.data;
    }
};

export default ProductService; 