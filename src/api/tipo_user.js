import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/usuario/";

export default class Tipos_userAPI {
    async getTipo_userAll(){
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar tipos de usuários:", error);
            throw error;
        }
    }

    async addTipo_user(tipo_user){
        try {
            const response = await axios.post(API_BASE_URL, tipo_user);
            return response.data;
        } catch (error) {
            console.error("Erro ao adicionar tipo de usuário:", error);
            throw error;
        }
    }
    
    async updateTipo_user(tipo_user) {
        try {
            const url = `${API_BASE_URL}${tipo_user.id}/`;
            const response = await axios.put(url, tipo_user);
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar tipo de usuário:", error);
            throw error;
        }
    }

    async deleteTipo_user(id) {
        try {
            const url = `${API_BASE_URL}${id}/`;
            const response = await axios.delete(url);
            return response;
        } catch (error) {
            console.error("Erro ao excluir tipo de usuário:", error);
            throw error;
        }
    }
}