<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()
const tiposUsuarios = ref([])

function voltar() {
  router.push('/')
}

function toggleSenha() {
  const senha = document.getElementById("senha");
  senha.type = senha.type === "password" ? "text" : "password";
}

async function carregarTiposUsuario() {
  try {
    const response = await fetch('http://localhost:8000/api/tipo_usuario/') // ajuste a URL se necessário
    const data = await response.json()
    tiposUsuarios.value = data
  } catch (error) {
    console.error('Erro ao carregar tipos de usuário:', error)
  }
}

onMounted(() => {
  carregarTiposUsuario()
})

</script>

<template>
  <section>
    <div class="principal">
      <h1>Cadastro de Discentes</h1>

      <form @submit.prevent="cadastrar">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="nascimento">Data de Nascimento:</label>
        <input type="date" id="nascimento" name="nascimento" required>

        <label for="login">Nome de Login:</label>
        <input type="text" id="login" name="login" required>

        <select name="tipo_user" id="tipo_user" required>
          <option disabled value="">
            Selecione o seu tipo de usuário
          </option>
          <option v-for="tipo in tiposUsuarios.filter(t => t.descricao !== 'Admin')" :key="tipo.id" :value="tipo.id" >
            {{ tipo.descricao }}
          </option>
        </select>

        <label for="senha">Senha:</label>
        <div class="campo-senha">
          <input :type="senhaVisivel ? 'text' : 'password'" id="senha" name="senha" required>
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
</template>

<style scoped>
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
}

input {
  font-size: 1.3rem;
  width: 80%;
  padding: 15px 5px 15px 0;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin: 0 0 0 6vw;
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
  background: linear-gradient(135deg, #02367a, #1e88e5);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}

.voltar {
  background: linear-gradient(135deg, #1c7ed4, #42a5f5);
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 5px;
  padding: 20px 20px 20px 20px;
  font-size: 1.2rem;
  margin-left: 2vw;
  margin-bottom: 2vw;
}
</style>