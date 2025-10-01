<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { jwtDecode } from "jwt-decode";

const user = reactive({
  username: 'admin',
  password: 'admin'
})

const router = useRouter()

const senhaVisivel = ref(false)

const tipo = ref('não logado')

function irParaCadastro() {
  router.push('/cadastro')
}

function toggleSenha() {
  senhaVisivel.value = !senhaVisivel.value
}

const erro = ref('')

async function login() {
  erro.value = ''
  try {
    const { data } = await axios.post('http://127.0.0.1:8000/api/token/', user)
    const token = data.access
    localStorage.setItem('auth_token', token)

    const decoded_token = jwtDecode(token)
    tipo.value = decoded_token.tipo

    const { data: userData } = await axios.get('http://127.0.0.1:8000/api/usuario/me/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    localStorage.setItem('user_info', JSON.stringify(userData))

    router.push('/usuario')
  } catch (e) {
    erro.value = 'Usuário ou senha inválidos'
    console.error("Erro ao fazer login:", e);
  }
}
</script>

<template>
  <section>
    <p v-if="erro" style="color: red">{{ erro }}</p>
    <div class="principal">
      <form @submit.prevent="login">
      <div class="icone">
        <img src="/imagem/Group 71.png" alt="avatar">
      </div>

      <label for="user">Usuário:</label>
      <input type="text" id="user" name="user" v-model="user.username" required>

        <label for="senha">Senha:</label>
        <div class="campo-senha">
          <input :type="senhaVisivel ? 'text' : 'password'" id="senha" name="senha" v-model="user.password" required>
          <span class="olho" @click="toggleSenha">
          {{ senhaVisivel? '🙈': '👁' }}
        </span>
    </div>
    <button type="submit">Enviar</button>
  </form>
</div>
  </section >

  <section class="cadastros">
    <div>
      <h2>Discente:</h2>
      <p>
        caso ainda não possua cadastro, clique no link abaixo.
      </p>
      <a @click="irParaCadastro" class="link-button">Cadastre-se</a>
  </div>
  </section >
</template >

  <style scoped>
    .principal{
      background: linear-gradient(135deg, #1c7ed4, #42a5f5);
      margin: 8vw 150px 0 150px;
      padding: 150px 140px 140px 140px;
      border-radius: 20px;
}

    form {
      background: white;
      padding: 85px 105px 35px 105px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
}


    h2 {
      font-weight: bolder;
      font-size: calc(1.3rem);
      padding: 15px 5px 15px 0;
      text-align: center;
}


    label {
      font-size: calc(1.5rem);
      display: block;
      margin-top: 10px;
      font-weight: bold;
      margin: 2vw 0 0.5vw -27vw ;
}


    input {
      font-size: calc(1.3rem);
      width: 80%;
      padding: 15px 5px 15px 0;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 6px;
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


    .campo-senha .olho {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      font-size: 1.3rem;
      user-select: none;
}


    form button {
      background: linear-gradient(135deg, #1c7ed4, #42a5f5);
      color: white;
      font-size: calc(1.3rem);
      padding: 10px 25px 10px 25px;
      margin: 60px 150px 30px 150px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: transform 0.2s;
}


    button:hover {
      background: linear-gradient(135deg, #02367a, #1e88e5);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
      transform: scale(1.05);
}
    a:hover{
      color:#2c71c0;;
      text-decoration: underline;
}

    .icone {
      position: absolute;
      top: -90px;
      left: 50%;
      transform: translateX(-50%);
      background: #fff;
      border-radius: 50%;
      padding: 8px;
}

    .icone img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
}
  </style>
