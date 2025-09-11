import { defineStore } from 'pinia'

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
})
