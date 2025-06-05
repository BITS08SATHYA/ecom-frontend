import api from "./api.js";

export const login = async (user, password) => {
    try {
        const response = await api.post('/auth/signin', {
            username: user,
            password: password,
        });

        console.log('Login success:', response.data);
        // ✅ Cookie is set by browser if backend responded with Set-Cookie
    } catch (error) {
        console.error('Login failed:', error.response?.data || error.message);
    }
};