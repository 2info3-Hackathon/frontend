import { defineStore } from 'pinia'

export const useEventStore = defineStore('event', {
  state: () => ({
    produtosA: [],
    produtosB: [],
    produtosC: []
  }),

  actions: {
    newEvent(nomeProduto, preco, local, data, hora, desc, categoria) {
      const event = {
        id: Date.now(),
        nomeProduto,
        preco,
        local,
        data,
        hora,
        descricao: desc
      }

      if (categoria === "A") {
        this.produtosA.push(event)
      } else if (categoria === "B") {
        this.produtosB.push(event)
      } else if (categoria === "C") {
        this.produtosC.push(event)
      }
    },

    clearFormList() {
      this.produtosA = []
      this.produtosB = []
      this.produtosC = []
    }
  }
})
