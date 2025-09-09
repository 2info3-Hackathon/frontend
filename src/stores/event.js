import { defineStore } from 'pinia';

export const useEventStore = defineStore('event', {
  state: () => ({
    events: [],
    isLoaded: false,
  }),

  actions:{
    addEvent(event) {
      this.events.push(event)
    },

    clearFormList() {
      this.events = []
    },
  }
});

function addEvent() {
  
}
