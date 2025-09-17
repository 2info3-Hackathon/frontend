import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/usuario";

export default class UserAPI {
    async getUserAll(){
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            throw error;
        }
    }

    async addUser(user){
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