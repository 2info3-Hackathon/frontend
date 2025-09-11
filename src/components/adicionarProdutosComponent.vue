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
          <div class="turmas">
            <p> Turmas </p>
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
                    Nome do Produto:
                </label>

    <div v-if="imagemPreview">
      
    </div>
                <input type="text" v-model="nomeProduto" id="nomeProduto">
            </div>
            <div class="data-hora">
              <div>
                <label for="preco">
                  preço
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
                        Descrição do Produto:
                    </label>
                </div>
                <textarea v-model="desc" id="desc" rows="5" cols="45"></textarea>
            </div>
            <div class="imagem">
             <input class="imagem" type="file" @change="onFileChange" accept="image/*" />
            <p>Imagem</p>
      <img :src="imagemPreview" alt="Prévia" width="400" height="400"  class="w-32 h-32 object-cover mt-2"/>
      </div>

       <div class="final">
                <input type="submit" value="Enviar">
            </div>
        </form>
    </section>
</template>
<style scoped>
section{
    margin: 6vw;
    background: linear-gradient(45deg, #1B5299, #2D88FF);
    padding: 4vw;
    border-radius: 10px;
    color: white;
    font-size: calc(1.5vw + 0.390625vw);

    & .data-hora{
        display: flex;
        justify-content: space-between;
        padding: 2vw 0;
        width: 70%;
    }

    & input{
        font-size: calc(1.5vw + 0.390625vw);
        border-radius: 5px;
        border: solid black ;
        margin: 0 0 0 1vw;
        padding: 10px;
    }

    & textarea{
        font-size: calc(1.5vw + 0.390625vw);
        border-radius: 5px;
        border: solid black ;
        margin: 2vw 0;
    }

    & .final {

        text-align: center;

        & input{
            font-size: calc(1.5vw + 0.390625vw);
            border-radius: 5px;
            border: solid black ;
            color: #1B5299;
            margin: 0 3vw 0 0 ;
            padding: 1vw;

            &:last-child{
                margin: 0 0 0 3vw;
            }
        }

    }
}
 & select {
   font-size: calc(1.5vw + 0.390625vw);
        border-radius: 5px;
        border: solid black ;
        margin: 0 0 0 1vw;
        padding: 10px;
        margin: 0 0 4vw 0;
}
div.imagem {
  text-align: center;
}
& input.imagem {
font-size: calc(1.5vw + 0.390625vw);
        border-radius: 5px;
        border: solid black ;
        margin: 0 0 0 1vw;
        padding: 10px;
        margin: 0 0 4vw 0;  
         text-align: center;
}

</style>
