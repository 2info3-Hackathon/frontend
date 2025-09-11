<script setup>
import { useRouter } from 'vue-router'
import { useProdutosStore } from '@/stores/produtos';
import { ref } from 'vue'

const router = useRouter();
const produtosStore = useProdutosStore();

function voltar() {
    router.push('/')
}

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
  <h1>Adicionar Produtos</h1>

    <section class="informacoes">

        <form @submit.prevent="addProduto">
<<<<<<< HEAD
=======
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
>>>>>>> 1e805e5812ae0b93fdb655650a69afcdf48ba75b

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

          <label for="foto">Baixe uma capa:</label>
          <input type="file" @change="onFileChange" accept="image/*" />

          <div v-if="imagemPreview">
            <img :src="imagemPreview" alt="Prévia" width="200" height="200"  class="w-32 h-32 object-cover mt-2"/>
          </div>
<<<<<<< HEAD

          <label for="nomeProduto">Nome do Evento:</label>
          <input type="text" v-model="nomeProduto" id="nomeProduto">

          <label for="preco">Preço:</label>
          <input type="number" v-model="preco" id="preco">

          <label for="local">Local</label>
          <input type="text" v-model="local" id="local">

          <label for="data">Data:</label>
          <input type="date" v-model="data" id="data">

          <label for="hora">Hora:</label>
          <input type="time" id="time" v-model="hora" />

          <label for="desc">Descrição do Evento:</label>
          <textarea v-model="desc" id="desc" rows="5" cols="45"></textarea>

          <div class="botoes">
            <button type="reset">Limpar</button>
            <button type="submit">Enviar</button>
          </div>
=======
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
>>>>>>> 1e805e5812ae0b93fdb655650a69afcdf48ba75b
        </form>
    </section>
    <button class="turmas" @click="voltar">← Voltar</button>
</template>
<style scoped>
section{
    margin: 6vw;
    background: linear-gradient(45deg, #1B5299, #2D88FF);
    padding: 4vw;
    border-radius: 10px;
    color: white;
    font-size: calc(1.5vw + 0.390625vw);

<<<<<<< HEAD
<style scoped>
button {
  background: linear-gradient(135deg, #1f68c7, #42a5f5);
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 5px;
  padding: 20px 20px 20px 20px;
  font-size: calc(1.2rem);
  margin-left: 2vw;
}

button:hover {
  background: linear-gradient(135deg, #02367a, #1e88e5);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}

h1 {
  color: #1C72D3;
  text-align: center;
  margin-top: 3vw;
  font-size: calc(2.5rem);
  margin-bottom: 2vw;
  font-weight: bolder;
}

.informacoes {
  background: linear-gradient(135deg, #1f68c7, #42a5f5);
  margin: 50px 60px 50px 60px;
  padding: 35px 95px 35px 95px;
  border-radius: 20px;
}

form {
  background: white;
  padding: 35px 95px 35px 95px;
  margin: 80px 150px 80px 150px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  font-weight: bolder;
  font-size: calc(20px);
  padding: 15px 5px 15px 0;
}

label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

input, select {
  font-size: calc(15px);
  width: 100%;
  padding: 15px 5px 15px 0;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.botoes button {
  background: linear-gradient(135deg, #1f68c7, #42a5f5);
  color: white;
  font-size: calc(20px);
  padding: 15px 30px;
  margin: 60px 80px 30px 100px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s;
}
</style>
=======
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
>>>>>>> 1e805e5812ae0b93fdb655650a69afcdf48ba75b
