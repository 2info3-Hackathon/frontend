import { defineStore } from 'pinia'

export const useReservadosStore = defineStore('reservados', {
  state: () => ({
    reservados: []
  }),

  actions: {
    addToReservados(produto) {
      this.reservados.push(produto)
    }
  }
})
