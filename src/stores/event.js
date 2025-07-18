import { ref } from 'vue';

import { defineStore } from 'pinia'


export const useEventStore = defineStore('event', () => {

    const events = ref ([
        {
            id: 1,
            nome: '',
            hora: '',
            data: '',
            tema: '',
            descricao: '',
        },
    ])

    return { useEventStore, events }
    })