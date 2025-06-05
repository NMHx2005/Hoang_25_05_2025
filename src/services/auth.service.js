import axiosInstance from './axios.config';

const AuthService = {
    // Đăng nhập
    login: async (credentials) => {
        const response = await axiosInstance.post('/user/login', credentials);
        console.log(response);
        if (response.data.accessToken) {
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('userId', response.data.userId);
        }
        return response.data;
    },

    // Đăng ký người dùng mới
    register: async (userData) => {
        const response = await axiosInstance.post('/user/register', userData);
        return response.data;
    },

    // Đăng xuất
    logout: async () => {
        try {
            await axiosInstance.post('/user/logout');
        } catch (error) {
            console.error('Logout failed on server, but clearing local storage.', error);
        } finally {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('user');
        }
    },

    // Lấy thông tin user hiện tại bằng cách gọi API /api/user/{id}
    getCurrentUser: async () => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            try {
                const user = await AuthService.getUserById(userId);
                return user;
            } catch (error) {
                console.error('Failed to fetch current user data:', error);
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
                localStorage.removeItem('user');
                return null;
            }
        }
        return null;
    },

    // Kiểm tra xem user đã đăng nhập chưa (kiểm tra token hoặc userId trong local storage)
    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    },

    // Refresh token
    refreshToken: async () => {
        const response = await axiosInstance.post('/user/refresh-token');
        if (response.data.accessToken) {
            localStorage.setItem('token', response.data.accessToken);
        }
        return response.data;
    },

    // Lấy thông tin user theo ID
    getUserById: async (id) => {
        const response = await axiosInstance.get(`/user/${id}`);
        return response.data;
    },

    // Cập nhật thông tin user theo ID (PUT)
    updateUser: async (id, userData) => {
        const response = await axiosInstance.put(`/user/${id}`, userData);
        return response.data;
    },

    // Cập nhật thông tin user theo ID (PATCH)
    patchUser: async (id, userData) => {
        const response = await axiosInstance.patch(`/user/${id}`, userData);
        return response.data;
    },

    // Xóa user theo ID
    deleteUser: async (id) => {
        const response = await axiosInstance.delete(`/user/${id}`);
        return response.data;
    },

    // Lấy tất cả users
    getAllUsers: async () => {
        const response = await axiosInstance.get('/user');
        return response.data;
    },

    // Tạo tài khoản Staff, Admin, Shipper
    createStaffAdminShipperAccount: async (accountData) => {
        const response = await axiosInstance.post('/user/create-staff-admin-shipper-account', accountData);
        return response.data;
    },

    // Xác nhận email
    confirmEmail: async (token) => {
        const response = await axiosInstance.post('/user/confirm-email', { token });
        return response.data;
    }
};

export default AuthService; 