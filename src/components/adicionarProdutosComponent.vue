<script setup>
import { useRouter } from 'vue-router'
import { useProdutosStore } from '@/stores/produtos';
import { ref } from 'vue'

const router = useRouter();
const produtosStore = useProdutosStore();

let nomeProduto = ref('');
let preco = ref('');
let local = ref('');
let data = ref('');
let hora = ref('');
let categoria = ref('');
let desc = ref('');
let imagemFile = ref(null)
let imagemPreview = ref(null)

function onFileChange(e) {
  const file = e.target.files[0]
  if (file) {
    imagemFile.value = file
    imagemPreview.value = URL.createObjectURL(file)
  }
}

function addProduto() {
  produtosStore.newProduto(
    nomeProduto.value,
    preco.value,
    local.value,
    data.value,
    hora.value,
    desc.value,
    categoria.value,
    imagemPreview.value 
  );

  nomeProduto.value = '';
  preco.value = '';
  local.value = '';
  data.value = '';
  hora.value = '';
  desc.value = '';
  categoria.value = '';
  imagemFile.value = null;
  imagemPreview.value = null;

  router.push({ name: 'Agro1' });
} 

</script>
<template>
    <section>
        <form @submit.prevent="addProduto">
          <div>
           <select v-model="categoria" required>
          <option value="">-- Selecione a turma --</option>
          <option value="3Agro1">3Agro1</option>
          <option value="3Agro2">3Agro2</option>
          <option value="3Agro3">3Agro3</option>
          <option value="3Info1">3Info1</option>
          <option value="3Info2">3Info2</option>
          <option value="3Info3">3Info3</option>
          <option value="3Quimi">3Quimi</option>

        </select>

          </div>
            <div>
                <label for="nomeProduto">
                    Nome do Evento:
                </label>

    <input type="file" @change="onFileChange" accept="image/*" />

    <div v-if="imagemPreview">
      <img :src="imagemPreview" alt="Prévia" width="200" height="200"  class="w-32 h-32 object-cover mt-2"/>
    </div>
                <input type="text" v-model="nomeProduto" id="nomeProduto">
            </div>
            <div class="data-hora">
              <div>
                <label for="preco">
                  preco
                </label>
                <input type="number" v-model="preco" id="preco">
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

