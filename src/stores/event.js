import { ref } from 'vue';

import { defineStore } from 'pinia'


export const useEventStore = defineStore('event', () => {

    const events = ref ([
        {
            id: 1,
            nome: 'Hackathon',
            hora: '12:00',
            data: '15/08/2024',
            tema: 'Programação',
            descricao: 'Apresentação do projeto do Hackathon para todas as 2infos                                          jfcieowfvnehyvgjwhcfhbasjhchg3w4uifhjahbauyfgaeuyhf ajhfbeahjvbeuhafbaeihbfhujeabfeajrhgb reuahgbearuipghbeapiughraeuifhariughruighaiughrea',
        },
        {
            id: 2,
            nome: 'Hackathon',
            hora: '12:00',
            data: '15/08/2024',
            tema: 'Programação',
            descricao: 'Apresentação do projeto do Hackathon para todas as 2infos',
        },
    ])

    return { useEventStore, events }
    })