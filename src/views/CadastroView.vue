<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import axios from 'axios'

let router = useRouter()
let tiposUsuarios = ref([])

let first_name = ref('');
let last_name = ref('');
let nome = ref('');
let email = ref('');
let data_nascimento = ref('');
let username = ref('');
let tipo_user = ref('');
let senha = ref('');
let telefone = ref('');

let senhaVisivel = ref(false);

async function cadastrar() {
  try {
    nome.value = `${first_name.value} ${last_name.value}`;
    const response = await axios.post('http://127.0.0.1:8000/api/usuario/', {
      nome: nome.value,
      email: email.value,
      data_nascimento: data_nascimento.value,
      telefone: telefone.value,
      username: username.value,
      tipo_user: tipo_user.value,
      password: senha.value,
    },)
    console.log('Usuário cadastrado com sucesso', response.data)
    alert('Usuário cadastrado com sucesso', response.data)
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error)
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

function toggleSenha() {
  senhaVisivel.value = !senhaVisivel.value;
}

async function carregarTiposUsuario() {
  try {
    const response = await axios.get('http://localhost:8000/api/tipo_usuario/')
    tiposUsuarios.value = response.data
  } catch (error) {
    console.error('Erro ao carregar tipos de usuário:', error)
  }
}

onMounted(() => {
  carregarTiposUsuario()
})
</script>

<template>
  <body>
    <section>
    <div class="principal">
      <h1>Cadastro</h1>

      <form @submit.prevent="cadastrar" method="post">
        <label for="first_name">Nome:</label>
        <input type="text" id="first_name" name="first_name" v-model="first_name" required>

        <label for="last_name">Sobrenome:</label>
        <input type="text" id="last_name" name="last_name" v-model="last_name" required>

        <label for="telefone">Telefone:</label>
        <input type="tel" name="telefone" id="telefone" v-model="telefone" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="email" required>

        <label for="data_nascimento">Data de Nascimento:</label>
        <input type="date" id="data_nascimento" name="data_nascimento" v-model="data_nascimento" required>

        <select name="tipo_user" id="tipo_user" v-model="tipo_user" required>
          <option disabled value="">
            Selecione o seu tipo de usuário
          </option>
          <option v-for="tipo in tiposUsuarios.filter(t => t.descricao !== 'Admin')" :key="tipo.id" :value="tipo.id">
            {{ tipo.descricao }}
          </option>
        </select>

        <label for="username">Nome de Login:</label>
        <input type="text" id="username" name="username" v-model="username" required>

        <label for="senha">Senha:</label>
        <div class="campo-senha">
          <input :type="senhaVisivel ? 'text' : 'password'" id="senha" name="senha" v-model="senha" required>
          <span class="olho" @click="toggleSenha">
            {{ senhaVisivel ? '🙈' : '👁' }}
          </span>
        </div>

        <div class="botoes">
          <button type="reset">Limpar</button>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>

    <button class="voltar" @click="voltar">← Voltar</button>
  </section>
  </body>
</template>

<style scoped>
body{
  margin-bottom: -15vw;
}
.principal {
  background: linear-gradient(135deg, #1c7ed4, #42a5f5);
  margin: 50px 150px 50px 150px;
  padding: 70px 140px 140px 140px;
  border-radius: 20px;
}


h1 {
  color: white;
  font-size: 2.5rem;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 3.5vw;
}


form {
  background: white;
  padding: 55px 105px 35px 105px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
}


h2 {
  font-weight: bolder;
  font-size: 1.3rem;
  padding: 15px 5px 15px 0;
}


label {
  font-size: 1.5rem;
  display: block;
  margin-top: 20px;
  font-weight: bold;
  margin: 0.7vw 0 0.7vw 6vw;
  color:rgba(0, 0, 0, 0.897);
}


input {
  font-size: 1.3rem;
  width: 80%;
  padding: 15px 5px 15px 0;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin: 0 0 0 6vw;
  color:rgba(0, 0, 0, 0.897);
}


.campo-senha {
  position: relative;
  width: 80%;
}


.campo-senha input {
  font-size: calc(1.5rem);
  width: 100%;
  padding: 15px 5px 15px 0;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
}


select {
  font-size: calc(1.5rem);
  width: 80%;
  padding: 15px 5px 15px 0;
  margin-left: 6vw;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
}


.campo-senha .olho {
  position: absolute;
  left: 37vw;
  top: 54%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1.3rem;
  user-select: none;
}


.botoes {
  display: flex;
}


.botoes button {
  background: linear-gradient(135deg, #1c7ed4, #42a5f5);
  color: white;
  font-size: 20px;
  padding: 15px 30px;
  margin: 60px 80px 30px 100px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s;
}


button:hover {
  transform: scale(1.05);
}


.voltar {
   background-color: #1C72D3;
    color: white;
    border-radius: 5px;
    padding: 10px 30px ;
    border: none;
    font-size: 1.2rem;
    margin-left: 3vw;
    margin-top: 5vw;
    cursor: pointer;
    transition: transform 0.2s;
}

</style>