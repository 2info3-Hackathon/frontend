<script setup>
import { useRouter } from 'vue-router'
import { useProdutosStore } from '@/stores/produtos';
import { ref } from 'vue'

const router = useRouter();
const produtosStore = useProdutosStore();

function voltar() {
    router.push('/terceirao')
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

const mostrarAviso = ref(false);

function enviarFormulario() {
  mostrarAviso.value = true;

  setTimeout(() => {
    mostrarAviso.value = false;
  }, 3000);
}
</script>

<template>
  <h1>Adicionar Produtos</h1>

    <section class="informacoes">

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

          <label for="foto">Baixe uma capa:</label>
          <input type="file" @change="onFileChange" accept="image/*" />

          <div v-if="imagemPreview">
            <img :src="imagemPreview" alt="Prévia" width="200" height="200"  class="w-32 h-32 object-cover mt-2"/>
          </div>

          <label for="nomeProduto">Nome do Produto:</label>
          <input type="text" v-model="nomeProduto" id="nomeProduto">

          <label for="preco">Preço:</label>
          <input type="number" v-model="preco" id="preco">

          <label for="local">Local</label>
          <input type="text" v-model="local" id="local">

          <label for="data">Data:</label>
          <input type="date" v-model="data" id="data">

          <label for="hora">Hora:</label>
          <input type="time" id="time" v-model="hora" />

          <label for="desc">Descrição do Produto:</label>
          <textarea v-model="desc" id="desc" rows="5" cols="45"></textarea>

          <div class="botoes">
            <button type="reset">Limpar</button>
            <button type="submit" @click="enviarFormulario">Enviar</button>
          </div>
    </div>
    </form>

    <div v-if="mostrarAviso" class="aviso">
        ✅ Produto adicionado com sucesso!
      </div>

    </section>
    <button class="turmas" @click="voltar">← Voltar</button>
</template>

<style scoped>
section{
    margin: 6vw;
    background: linear-gradient(45deg, #1B5299, #2D88FF);
    padding: 4vw;
    border-radius: 10px;
    font-size: calc(1.5vw);
}

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

p{
  font-weight: bold;
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

.aviso {
  position: fixed;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #1B5299, #42a5f5);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: aparecer 0.3s ease;
}

@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
