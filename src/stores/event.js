import { defineStore } from 'pinia';
import { ref } from "vue"

export const useEventStore = defineStore('event', {
  state: () => ({
    events: [],
  }),

  actions:{
    newEvent(nomeEvento, data, hora, desc) {
      let event = 
        {
          id: Date.now(),
          nomeEvento: nomeEvento,
          data: data,
          hora: hora,
          descricao: desc,
        }
      this.events.push(event)
    },

    clearFormList() {
      this.events = ref([])
    },
  },
});