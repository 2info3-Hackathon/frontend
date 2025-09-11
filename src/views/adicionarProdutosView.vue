<script setup>

import { useRouter } from 'vue-router'
import { useEventStore } from '@/stores/event';
import { ref } from 'vue'

let router = useRouter();

let nomeProduto = ref('');
let preco = ref('');
let local = ref('');
let data = ref('');
let hora = ref('');
let categoria = ref('');

let desc = ref('');


let eventStore = useEventStore();

function addProduto()
{
    eventStore.newEvent(nomeProduto.value, preco.value, local.value, data.value, hora.value, desc.value, categoria.value);

    nomeProduto.value = '';
    preco.value = '';
    local.value = '';
    data.value = '';
    hora.value = '';
    desc.value = '';
    categoria.value = '';

    router.push({ name: 'Eventos' });
    router.push({name: 'A'})
}

</script>

<template>
    <section>
        <form @submit.prevent="addProduto">
          <div>
           <select v-model="categoria" required>
          <option value="">-- Selecione a categoria --</option>
          <option value="A">Categoria A</option>
          <option value="B">Categoria B</option>
          <option value="C">Categoria C</option>
        </select>

          </div>
            <div>
                <label for="nomeProduto">
                    Nome do Evento:
                </label>
                <input type="text" v-model="nomeProduto" id="nomeProduto">
            </div>
            <div class="data-hora">
              <div>
                <label for="preco">
                  preco
                </label>
                <input type="number" v-model="numero" id="preco">
              </div>
               <div>
                    <label for="local">
                  Local
                </label>
                <input type="text" v-model="local" id="local">
                  </div>
                <div>
                    <label for="data">
                        Data:
                    </label>
                    <input type="date" v-model="data" id="data">
                </div>
                <div>
                    <label for="hora">
                        Hora:
                    </label>
                    <input type="time" id="time" v-model="hora" />
                </div>
            </div>
            <div>
                <div>
                    <label for="desc">
                        Descrição do Evento:
                    </label>
                </div>
                <textarea v-model="desc" id="desc" rows="5" cols="45"></textarea>
            </div>

            <div class="final">
                <input type="submit" value="Enviar">
            </div>
        </form>
    </section>
</template>

