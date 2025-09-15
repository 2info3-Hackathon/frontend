import { ref } from 'vue'
import { defineStore } from 'pinia'
import UserAPI from '@/api/user'

const userApi = new UserAPI();

export const useUserStore = defineStore('user', () => {
    const user = ref([]);

    async function getUser() {
        try {
            const data = await userApi.getEstadosAll();
            user.value = data;
        } catch (error) {
            console.error("Erro no store ao buscar usuários:", error);
            throw error;
        }
    }

    async function addUser(userParaAdicionar) {
        try {
            const novoUser = await userApi.addUser(userParaAdicionar);
            user.value.push(novoUser);
        } catch (error) {
            console.error("Erro no store ao adicionar usuário:", error);
            throw error;
        }
    }

    async function updateUser(userParaAtualizar) {
        try {
            const userAtualizado = await userApi.updateUser(userParaAtualizar);
            const index = user.value.findIndex(est => est.id === userAtualizado.id);
            if (index !== -1) {
                user.value[index] = userAtualizado;
            }
        } catch (error) {
            console.error("Erro no store ao atualizar usuário:", error);
            throw error;
        }
    }

    async function deleteUser(idParaExcluir) {
        try {
            await userApi.deleteUser(idParaExcluir);
            user.value = user.value.filter(user => user.id !== idParaExcluir);
        } catch (error) {
            console.error("Erro no store ao excluir usuário:", error);
            throw error;
        }
    }

    return { user, getUser, addUser, updateUser, deleteUser };
});