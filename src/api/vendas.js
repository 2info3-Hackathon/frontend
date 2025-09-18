import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/vendas/";

export default class VendasAPI {
    async getVendasAll(){
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar venda:", error);
            throw error;
        }
    }

    async addVendas(tipo_user){
        try {
            const response = await axios.post(API_BASE_URL, tipo_user);
            return response.data;
        } catch (error) {
            console.error("Erro ao adicionar venda:", error);
            throw error;
        }
    }

    async updateVendas(tipo_user) {
        try {
            const url = `${API_BASE_URL}${tipo_user.id}/`;
            const response = await axios.put(url, tipo_user);
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar venda:", error);
            throw error;
        }
    }

    async deleteVendas(id) {
        try {
            const url = `${API_BASE_URL}${id}/`;
            const response = await axios.delete(url);
            return response;
        } catch (error) {
            console.error("Erro ao excluir venda:", error);
            throw error;
        }
    }
}
