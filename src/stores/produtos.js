/*import { defineStore } from 'pinia'

export const useProdutosStore = defineStore('produto', {
  state: () => ({
    agro1: [],
    agro2: [],
    agro3: [],
    info1: [],
    info2: [],
    info3: [],
    quimi: []
  }),

  actions: {
    newProduto(nomeProduto, preco, local, data, hora, desc, categoria, imagem) {
      const produto = {
        id: Date.now(),
        nomeProduto,
        preco,
        local,
        data,
        hora,
        descricao: desc,
        imagem,
      }

      if (categoria === "3Agro1") {
        this.agro1.push(produto)
      } else if (categoria === "3Agro2") {
        this.agro2.push(produto)
      } else if (categoria === "3Agro3") {
        this.agro3.push(produto)
      } else if (categoria === '3Info1') {
        this.info1.push(produto)
      } else if (categoria === '3Info2') {
        this.info2.push(produto)
      } else if (categoria === '3Info3') {
        this.info3.push(produto)
      } else if (categoria === '3Quimi') {
        this.quimi.push(produto)
      }
    },

    clearFormList() {
      this.Agro1 = []
      this.Agro2 = []
      this.agro3 = []
      this.info1 = []
      this.info2 = []
      this.info3 = []
      this.quimi = []
    }
  }
})*/

import { ref } from 'vue'
import { defineStore } from 'pinia'
import VendasAPI from '@/api/vendas'

const vendasApi = new VendasAPI();

export const useVendasStore = defineStore('venda', () => {
    const venda = ref([]);

    async function getVendas() {
        try {
            const data = await vendasApi.getVendasAll();
            venda.value = data;
        } catch (error) {
            console.error("Erro no store ao buscar vendas:", error);
            throw error;
        }
    }

    async function addVendas(vendaParaAdicionar) {
        try {
            const novaVenda = await vendasApi.addVendas(vendaParaAdicionar);
            venda.value.push(novaVenda);
        } catch (error) {
            console.error("Erro no store ao adicionar venda:", error);
            throw error;
        }
    }

    async function updateVendas(vendaParaAtualizar) {
        try {
            const vendaAtualizado = await vendasApi.updateVendas(vendaParaAtualizar);
            const index = venda.value.findIndex(est => est.id === vendaAtualizado.id);
            if (index !== -1) {
                venda.value[index] = vendaAtualizado;
            }
        } catch (error) {
            console.error("Erro no store ao atualizar venda:", error);
            throw error;
        }
    }

    async function deleteVendas(idParaExcluir) {
        try {
            await vendasApi.deleteVendas(idParaExcluir);
            venda.value = venda.value.filter(venda => venda.id !== idParaExcluir);
        } catch (error) {
            console.error("Erro no store ao excluir usuário:", error);
            throw error;
        }
    }

    return { venda, getVendas, addVendas, updateVendas, deleteVendas };
});
