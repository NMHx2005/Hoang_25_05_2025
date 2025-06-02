import axiosInstance from './axios.config';

const AuthService = {
    // Đăng nhập
    login: async (credentials) => {
        const response = await axiosInstance.post('/auth/login', credentials);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response.data;
    },

    // Đăng ký
    register: async (userData) => {
        const response = await axiosInstance.post('/auth/register', userData);
        return response.data;
    },

    // Đăng xuất
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    // Lấy thông tin user hiện tại
    getCurrentUser: () => {
        const userStr = localStorage.getItem('user');
        if (userStr) return JSON.parse(userStr);
        return null;
    },

    // Kiểm tra xem user đã đăng nhập chưa
    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    },

    // Refresh token
    refreshToken: async () => {
        const response = await axiosInstance.post('/auth/refresh-token');
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    }
};

export default AuthService; 