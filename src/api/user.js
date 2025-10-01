import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/usuario/";
const TOKEN_KEY = 'auth_token';
const USER_INFO_KEY = 'user_info';



export default class UserAPI {
    constructor() {
        this.token = localStorage.getItem(TOKEN_KEY) || null;
        this.userInfo = null;

        if (this.token) {
            this.setAxiosToken(this.token);
            this.userInfo = JSON.parse(localStorage.getItem(USER_INFO_KEY)) || null;
        }
    }

    setAxiosToken(token) {
        this.api = axios.create({
            baseURL: API_BASE_URL
        });

        this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    async login(username, password) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                username,
                password
            });

            this.token = response.data.access;
            localStorage.setItem(TOKEN_KEY, this.token);
            this.setAxiosToken(this.token);

            // 🔥 Novo: busca os dados completos do usuário logado
            await this.getLoggedUser();

            return true;
        } catch (error) {
            console.error('Erro no login:', error);
            return false;
        }
    }

    async getLoggedUser() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/usuario/me/')
            this.userInfo = response.data
            localStorage.setItem('user_info', JSON.stringify(this.userInfo))
            return this.userInfo
        } catch (error) {
            console.error('Erro ao obter usuário logado:', error)
            this.userInfo = null
            localStorage.removeItem('user_info')
            return null
        }
    }

    logout() {
        this.token = null;
        this.userInfo = null;
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_INFO_KEY);
        delete this.api.defaults.headers.common['Authorization'];
    }

    async isLoggedIn() {
    if (!this.token) return false;

    try {
        await this.getLoggedUser(); // Se der erro, já trata
        return true;
    } catch {
        return false;
    }
}

    getUserInfo() {
        return this.userInfo;
    }

    async getUserAll() {
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            throw error;
        }
    }

    async addUser(user) {
        try {
            const response = await axios.post(API_BASE_URL, user);
            return response.data;
        } catch (error) {
            console.error("Erro ao adicionar usuário:", error);
            throw error;
        }
    }

    async updateUser(user) {
        try {
            const url = `${API_BASE_URL}${user.id}/`;
            const response = await axios.put(url, user);
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            throw error;
        }
    }

    async deleteUser(id) {
        try {
            const url = `${API_BASE_URL}${id}/`;
            const response = await axios.delete(url);
            return response;
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
            throw error;
        }
    }
}