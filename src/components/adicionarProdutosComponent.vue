<script setup>

import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import axios from 'axios'

let router = useRouter()

let nome = ref('');
let data = ref('');
let hora = ref('');
let local = ref('');
let preco = ref('');
let nome_produto = ref('');
let user = ref(null)

onMounted(() => {
    const userData = localStorage.getItem('user_info')
    if (userData) {
        user.value = JSON.parse(userData)
        console.log("Usuário carregado:", user.value)
    }
})

async function addProduto() {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/vendas/', {
      user: user.value?.id,
      nome: nome.value,
      data: data.value,
      hora: hora.value,
      local: local.value,
      preco: preco.value,
      nome_produto: nome_produto.value,
    },)
    console.log('Venda cadastrada com sucesso', response.data)
    alert('Venda cadastrada com sucesso', response.data)
  } catch (error) {
    console.error('Erro ao cadastrar venda:', error)
    if (error.response) {
      console.error('Erro no servidor:', error.response.data);
      alert('Erro no servidor: ' + error.response.data.detail);
    } else if (error.request) {
      console.error('Sem resposta do servidor:', error.request);
      alert('Sem resposta do servidor. Tente novamente mais tarde.');
    } else {
      console.error('Erro de configuração:', error.message);
      alert('Erro ao tentar enviar a requisição.');
    }
  }
}

function voltar() {
  router.push('/login')
}

</script>

<template>
  <body>
    <h1>Adicionar Produtos</h1>

    <section class="informacoes">

        <form @submit.prevent="addProduto">
          <div class="turmas">
           
            <!--<p> Turmas </p>

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
          </div> -->

          <label for="nome">Nome do Vendedor:</label>
          <input type="text" v-model="nome" id="nome">

          <label for="nome_produto">Nome do Produto:</label>
          <input type="text" v-model="nome_produto" id="nome_produto">

          <label for="preco">Preço:</label>
          <input type="number" v-model="preco" id="preco">

          <label for="local">Local</label>
          <input type="text" v-model="local" id="local">

          <label for="data">Data:</label>
          <input type="date" v-model="data" id="data">

          <label for="hora">Hora:</label>
          <input type="time" id="hora" v-model="hora" />

          <!--<label for="desc">Descrição do Produto:</label>
          <textarea v-model="desc" id="desc" rows="5" cols="45"></textarea> -->

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
  </body>
</template>

<style scoped>
body{
  margin-bottom: -15vw;
}
section{
    margin: 6vw;
    background: linear-gradient(45deg, #1B5299, #2D88FF);
    padding: 4vw;
    border-radius: 10px;
    font-size: calc(1.5vw);
}
button.turmas{
   background-color: #1C72D3;
    color: white;
    border-radius: 5px;
    padding: 10px 30px ;
    border: none;
    font-size: 1.2rem;
    margin-left: 2vw;
    margin-top: 5vw;
    cursor: pointer;
    transition: transform 0.2s;
}
button.turmas:hover{
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
