import { defineStore } from 'pinia'

export const useReservadosStore = defineStore('reservados', {
  state: () => ({
    reservados: []
  }),

  actions: {
    addToReservados(cart) {
      this.reservados.push({...cart})
    }
  }
})
